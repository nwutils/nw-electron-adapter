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
