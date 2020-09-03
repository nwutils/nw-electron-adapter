/**
 * Uses the DOM's console log if available, otherwise falls back to the background process.
 *
 * @return {Function}  console.log function
 */
function logger () {
  return global.win && global.win.console && global.win.console.log || console.log;
}

const helpers = {
  notPlanned: function () {
    const log = logger();
    log('___________________');
    log('nw-electron-adapter');
    log('This API mapping has not been planned yet.');
    log('Search for this API item in the issues and +1 it.');
    log('* https://github.com/nwutils/nw-electron-adapter/issues');
    log('Create an issue for it with the API name as the issue title if one does not exist.');
  },
  notPlannedNodeDefaultApplicationProtocol: function () {
    const log = logger();
    log('___________________');
    log('nw-electron-adapter');
    log('This API mapping is handled by an external repo, but this part of it needs your help:');
    log('* https://github.com/nwutils/node-default-application-protocol/issues');
  }
};

module.exports = helpers;
