const getAppPath = function () {
  if (global.nw) {
    return global.nw.App.startPath;
  }
};

module.exports = getAppPath;
