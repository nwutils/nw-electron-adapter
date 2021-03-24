
/*
  Electron Docs v11.0.3
  https://www.electronjs.org/docs/api/app#appname

  `app.name()`

  A String property that indicates the current application's name, which is the name in
  the application's package.json file.

  Usually the name field of package.json is a short lowercase name, according to the npm
  modules spec. You should usually also specify a productName field, which is your
  application's full capitalized name, and which will be preferred over name by Electron.
*/

/**
 * Returns the value of "productName" in the package.json, or
 * the value of "name" if there is no "productName".
 *
 * @return {string}  The name of the application
 */
const name = function () {
  let fs;
  let appName;
  appName = window && window.nw && window.nw.App && window.nw.App.manifest && window.nw.App.manifest.name || appName;
  appName = global && global.nw && global.nw.App && global.nw.App.manifest && global.nw.App.manifest.name || appName;
  appName = window && window.nw && window.nw.App && window.nw.App.manifest && window.nw.App.manifest.productName || appName;
  appName = global && global.nw && global.nw.App && global.nw.App.manifest && global.nw.App.manifest.productName || appName;
  if (!appName) {
    if (global && global.require && global.require('fs')) {
      fs = global.require('fs');
    } else if (window && window.require && window.require('fs')) {
      fs = window.require('fs');
    }
    if (fs && fs.existsSync('./package.json')) {
      try {
        let manifest = fs.readFileSync('./package.json');
        manifest = JSON.parse(manifest);
        appName = manifest.productName || manifest.name;
      } catch (err) {
        console.log('Could not find appName. Failed to read or parse package.json');
        console.log(err);
      }
    }
  }

  return appName;
};

module.exports = name;
