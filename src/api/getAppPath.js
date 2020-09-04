
/*
  Electron Docs v10.1.1
  https://www.electronjs.org/docs/api/app#appgetapppath

  `app.getAppPath()`

  Returns String - The current application directory.
*/

/**
 * Returns the start path for the application.
 *
 * @return {string}  Path to the application folder
 */
const getAppPath = function () {
  if (global.nw) {
    return global.nw.App.startPath;
  }
};

module.exports = getAppPath;
