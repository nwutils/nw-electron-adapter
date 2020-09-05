const helpers = require('@/src/helpers.js');
const testHelpers = require('@/tests/testHelpers.js');

describe('helpers', () => {
  let consoleLog;

  beforeEach(() => {
    consoleLog = console.log;
    console.log = jest.fn();
    global.win = {
      console: {
        log: jest.fn()
      }
    };
  });

  afterEach(() => {
    console.log = consoleLog;
    delete global.win;
  });

  describe('notPlanned', () => {
    test('Logs message', () => {
      helpers.notPlanned();

      expect(global.win.console.log)
        .toHaveBeenCalledWith('___________________');

      expect(global.win.console.log)
        .toHaveBeenCalledWith(testHelpers.title);

      expect(global.win.console.log)
        .toHaveBeenCalledWith('This API mapping has not been planned yet.');

      expect(global.win.console.log)
        .toHaveBeenCalledWith('Search for this API item in the issues and +1 it.');

      expect(global.win.console.log)
        .toHaveBeenCalledWith('* https://github.com/nwutils/nw-electron-adapter/issues');

      expect(global.win.console.log)
        .toHaveBeenCalledWith('Create an issue for it with the API name as the issue title if one does not exist.');
    });

    test('Logs message with console.log', () => {
      delete global.win;
      helpers.notPlanned();

      expect(console.log)
        .toHaveBeenCalledWith('___________________');

      expect(console.log)
        .toHaveBeenCalledWith(testHelpers.title);

      expect(console.log)
        .toHaveBeenCalledWith('This API mapping has not been planned yet.');

      expect(console.log)
        .toHaveBeenCalledWith('Search for this API item in the issues and +1 it.');

      expect(console.log)
        .toHaveBeenCalledWith('* https://github.com/nwutils/nw-electron-adapter/issues');

      expect(console.log)
        .toHaveBeenCalledWith('Create an issue for it with the API name as the issue title if one does not exist.');
    });
  });

  describe('notPlannedNodeDefaultApplicationProtocol', () => {
    test('Logs message', () => {
      helpers.notPlannedNodeDefaultApplicationProtocol();

      expect(global.win.console.log)
        .toHaveBeenCalledWith('___________________');

      expect(global.win.console.log)
        .toHaveBeenCalledWith(testHelpers.title);

      expect(global.win.console.log)
        .toHaveBeenCalledWith('This API mapping is handled by an external repo, but this part of it needs your help:');

      expect(global.win.console.log)
        .toHaveBeenCalledWith('* https://github.com/nwutils/node-default-application-protocol/issues');
    });
  });
});
