const fs = require('fs');
const path = require('path');
const os = require('os');

/*
  Electron Docs v10.1.1
  https://www.electronjs.org/docs/api/app#appgetpathname

  `app.getPath(name)`
    * `name` String - You can request the following paths by the name:
      * `home` User's home directory.
      * `appData` Per-user application data directory, which by default points to:
        * `%APPDATA%` on Windows
        * `$XDG_CONFIG_HOME` or `~/.config` on Linux
        * `~/Library/Application Support` on macOS
      * `userData` The directory for storing your app's configuration files, which by default it is the `appData` directory appended with your app's name.
      * `cache`
      * `temp` Temporary directory.
      * `exe` The current executable file.
      * `module` The `libchromiumcontent` library.
      * `desktop` The current user's Desktop directory.
      * `documents` Directory for a user's "My Documents".
      * `downloads` Directory for a user's downloads.
      * `music` Directory for a user's music.
      * `pictures` Directory for a user's pictures.
      * `videos` Directory for a user's videos.
      * `recent` Directory for the user's recent files (Windows only).
      * `logs` Directory for your app's log folder.
      * `pepperFlashSystemPlugin` Full path to the system version of the Pepper Flash plugin.
      * `crashDumps` Directory where crash dumps are stored.

  Returns `String` - A path to a special directory or file associated with `name`. On failure, an `Error` is thrown.

  If `app.getPath('logs')` is called without called `app.setAppLogsPath()` being called first, a default log directory will be created equivalent to calling `app.setAppLogsPath()` without a path parameter.
*/

/**
 * Helper for common paths. Pass in the specificed key to get a path. If you pass in the string 'all', an object of all paths will be returned.
 * If `name` is 'cache' or 'all', the cache folder will be created if it doesn't exist. Same for 'logs'.
 *
 * @param  {string} name  home, appData, userData, temp, exe, desktop, documents, downloads, music, pictures, videos, pepperFlashSystemPlugin, cache, module, logs, crashDumps, recent, all
 * @return {string}       The file path to that specific location ('recent' only available on Windows). Will throw if Error. Returns object if `name` is 'all'.
 */
const getPath = function (name) {
  let pathMap;
  // eslint-disable-next-line no-useless-catch
  try {
    if (global.nw && typeof(name) === 'string') {
      let appData;
      if (process.platform === 'win32') {
        appData = process.env.APPDATA;
      } else if (process.platform === 'linux') {
        appData = process.env.XDG_CONFIG_HOME || path.join(os.homedir(), '.config');
      } else if (process.platform === 'darwin') {
        appData = path.join(os.homedir(), 'Library', 'Application Support');
      }

      let dataPath = global.nw.App.dataPath;

      // Not sure if the pepper flash stuff is right, It's pretty close though if it isn't. Happy to accept a PR to correct this.
      let pepperFlashSystemPlugin = path.join(path.dirname(process.execPath), 'PepperFlash');
      if (process.platform === 'darwin') {
        pepperFlashSystemPlugin = path.join(process.execPath.split('Versions')[0], 'Internet Plug-Ins', 'PepperFlash');
      }

      pathMap = {
        home: process.env.XDG_CONFIG_HOME || os.homedir(),
        appData: appData,
        userData: dataPath,
        temp: os.tmpdir(),
        exe: process.execPath,
        desktop: path.join(os.homedir(), 'Desktop'),
        documents: path.join(os.homedir(), 'Documents'),
        downloads: path.join(os.homedir(), 'Downloads'),
        music: path.join(os.homedir(), 'Music'),
        pictures: path.join(os.homedir(), 'Pictures'),
        videos: path.join(os.homedir(), 'Videos'),
        pepperFlashSystemPlugin: pepperFlashSystemPlugin,

        // Electron shit that I don't think NW.js has a comparable alternative for, so I just made something up
        cache: path.join(path.dirname(path.dirname(dataPath)), 'cache'),
        module: dataPath,
        logs: path.join(path.dirname(path.dirname(dataPath)), 'logs'),
        crashDumps: path.join(path.dirname(dataPath), 'Crashpad')
      };

      if (process.platform === 'win32') {
        pathMap.recent = path.join(appData, 'Microsoft', 'Windows', 'Recent');
      }

      if ((name === 'cache' || name === 'all') && !fs.existsSync(pathMap.cache)) {
        fs.mkdirSync(pathMap.cache);
      }
      if ((name === 'logs' || name === 'all') && !fs.existsSync(pathMap.logs)) {
        fs.mkdirSync(pathMap.logs);
      }

      if (pathMap[name]) {
        return pathMap[name];
      }
      if (name === 'all') {
        return pathMap;
      }
      throw 'app.getPath(\'' + name + '\') - Requested path name not found. Try one of these: ' + Object.keys(pathMap).join(', ') + '.';
    }

    if (!global.nw) {
      throw 'app.getPath() can\'t run outside of NW.js';
    }

    let message = 'app.getPath() requires a string to be passed in.';
    if (typeof(name) === 'string') {
      message = 'app.getPath(\'' + name + '\') - Requested path name not found.';
    }
    if (pathMap) {
      message = message + ' Try one of these: ' + Object.keys(pathMap).join(', ') + '.';
    }
    throw message;
  } catch (err) {
    throw err;
  }
};

module.exports = getPath;
