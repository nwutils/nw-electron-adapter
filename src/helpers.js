const helpers = {
  notPlanned: function () {
    log = global.win && global.win.console && global.win.console.log || console.log;
    log('___________________');
    log('nw-electron-adapter');
    log('This API mapping has not been planned yet.');
    log('Search for this API item in the issues and +1 it.');
    log('* https://github.com/nwutils/nw-electron-adapter/issues');
    log('Create an issue for it with the API name as the issue title if one does not exist.');
  }
};

module.exports = helpers;
