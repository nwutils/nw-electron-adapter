const getPath = require('@/src/api/getPath.js');

describe('getPath', () => {
  const realProcess = process;

  beforeEach(() => {
    global.process = Object.assign(
      {},
      realProcess,
      {
        platform: 'win32',
        env: {
          APPDATA: 'C:\\Users\\DUMMY\\AppData\\Roaming',
          XDG_CONFIG_HOME: 'DUMMY_XDG_CONFIG_HOME'
        },
        execPath: 'C:\\Users\\DUMMY\\Documents\\GitHub\\MOCK\\node_modules\\nw\\nwjs\\nw.exe'
      }
    );
  });

  afterEach(() => {
    global.process = realProcess;
  });

  test('Outside of NW.js', () => {
    delete global.nw;

    expect(getPath)
      .toThrow('app.getPath() can\'t run outside of NW.js');
  });

  test('Bad types passed in', () => {
    let types = [
      undefined,
      null,
      NaN,
      -1,
      0,
      1,
      23,
      Infinity,
      -Infinity,
      [],
      {},
      true,
      false,
      () => {},
      new Set(),
      new Map(),
      new Date()
    ];

    types.forEach((type) => {
      try {
        getPath(type);
      } catch (err) {
        expect(err)
          .toEqual('app.getPath() requires a string to be passed in.');
      }
    });
  });

  test('Invalid name', () => {
    try {
      getPath('asdf');
    } catch (err) {
      expect(err)
        .toEqual('app.getPath(\'asdf\') - Requested path name not found. ' +
          'Try one of these: home, appData, userData, temp, exe, desktop, ' +
          'documents, downloads, music, pictures, videos, pepperFlashSystemPlugin, ' +
          'cache, module, logs, crashDumps, recent.');
    }
  });
});
