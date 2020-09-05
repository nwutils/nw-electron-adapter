jest.mock('fs');
jest.mock('os');
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
          XDG_CONFIG_HOME: '/DUMMY_XDG_CONFIG_HOME'
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
      expect(() => getPath(type))
        .toThrow('app.getPath() requires a string to be passed in.');
    });
  });

  test('Invalid name', () => {
    expect(() => getPath('asdf'))
      .toThrow('app.getPath(\'asdf\') - Requested path name not found. ' +
        'Try one of these: home, appData, userData, temp, exe, desktop, ' +
        'documents, downloads, music, pictures, videos, pepperFlashSystemPlugin, ' +
        'cache, module, logs, crashDumps, recent.');
  });

  test('appData non-xdg linux', () => {
    global.process.platform = 'linux';
    delete global.process.env.XDG_CONFIG_HOME;

    expect(getPath('appData'))
      .toEqual('C:\\Users\\MOCK_HOME_DIR\\.config');
  });

  test('All - Windows', () => {
    global.process.platform = 'win32';
    delete global.process.env.XDG_CONFIG_HOME;

    expect(getPath('all'))
      .toEqual({
        appData: 'C:\\Users\\DUMMY\\AppData\\Roaming',
        cache: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\cache',
        crashDumps: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Crashpad',
        desktop: 'C:\\Users\\MOCK_HOME_DIR\\Desktop',
        documents: 'C:\\Users\\MOCK_HOME_DIR\\Documents',
        downloads: 'C:\\Users\\MOCK_HOME_DIR\\Downloads',
        exe: 'C:\\Users\\DUMMY\\Documents\\GitHub\\MOCK\\node_modules\\nw\\nwjs\\nw.exe',
        home: 'C:\\Users\\MOCK_HOME_DIR',
        logs: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\logs',
        module: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Default',
        music: 'C:\\Users\\MOCK_HOME_DIR\\Music',
        pepperFlashSystemPlugin: 'C:\\Users\\DUMMY\\Documents\\GitHub\\MOCK\\node_modules\\nw\\nwjs\\PepperFlash',
        pictures: 'C:\\Users\\MOCK_HOME_DIR\\Pictures',
        recent: 'C:\\Users\\DUMMY\\AppData\\Roaming\\Microsoft\\Windows\\Recent',
        temp: 'C:\\Users\\DUMMY\\AppData\\Local\\Temp',
        userData: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Default',
        videos: 'C:\\Users\\MOCK_HOME_DIR\\Videos'
      });
  });

  test('All - Linux', () => {
    global.process.platform = 'linux';

    expect(getPath('all'))
      .toEqual({
        appData: '/DUMMY_XDG_CONFIG_HOME',
        cache: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\cache',
        crashDumps: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Crashpad',
        desktop: 'C:\\Users\\MOCK_HOME_DIR\\Desktop',
        documents: 'C:\\Users\\MOCK_HOME_DIR\\Documents',
        downloads: 'C:\\Users\\MOCK_HOME_DIR\\Downloads',
        exe: 'C:\\Users\\DUMMY\\Documents\\GitHub\\MOCK\\node_modules\\nw\\nwjs\\nw.exe',
        home: '/DUMMY_XDG_CONFIG_HOME',
        logs: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\logs',
        module: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Default',
        music: 'C:\\Users\\MOCK_HOME_DIR\\Music',
        pepperFlashSystemPlugin: 'C:\\Users\\DUMMY\\Documents\\GitHub\\MOCK\\node_modules\\nw\\nwjs\\PepperFlash',
        pictures: 'C:\\Users\\MOCK_HOME_DIR\\Pictures',
        temp: 'C:\\Users\\DUMMY\\AppData\\Local\\Temp',
        userData: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Default',
        videos: 'C:\\Users\\MOCK_HOME_DIR\\Videos'
      });
  });

  test('All - Darwin', () => {
    global.process.platform = 'darwin';

    expect(getPath('all'))
      .toEqual({
        appData: 'C:\\Users\\MOCK_HOME_DIR\\Library\\Application Support',
        cache: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\cache',
        crashDumps: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Crashpad',
        desktop: 'C:\\Users\\MOCK_HOME_DIR\\Desktop',
        documents: 'C:\\Users\\MOCK_HOME_DIR\\Documents',
        downloads: 'C:\\Users\\MOCK_HOME_DIR\\Downloads',
        exe: 'C:\\Users\\DUMMY\\Documents\\GitHub\\MOCK\\node_modules\\nw\\nwjs\\nw.exe',
        home: '/DUMMY_XDG_CONFIG_HOME',
        logs: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\logs',
        module: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Default',
        music: 'C:\\Users\\MOCK_HOME_DIR\\Music',
        pepperFlashSystemPlugin: 'C:\\Users\\DUMMY\\Documents\\GitHub\\MOCK\\node_modules\\nw\\nwjs\\nw.exe\\Internet Plug-Ins\\PepperFlash',
        pictures: 'C:\\Users\\MOCK_HOME_DIR\\Pictures',
        temp: 'C:\\Users\\DUMMY\\AppData\\Local\\Temp',
        userData: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Default',
        videos: 'C:\\Users\\MOCK_HOME_DIR\\Videos'
      });
  });

  test('All - asdf', () => {
    global.process.platform = 'asdf';
    delete global.process.env.XDG_CONFIG_HOME;

    expect(getPath('all'))
      .toEqual({
        appData: undefined,
        cache: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\cache',
        crashDumps: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Crashpad',
        desktop: 'C:\\Users\\MOCK_HOME_DIR\\Desktop',
        documents: 'C:\\Users\\MOCK_HOME_DIR\\Documents',
        downloads: 'C:\\Users\\MOCK_HOME_DIR\\Downloads',
        exe: 'C:\\Users\\DUMMY\\Documents\\GitHub\\MOCK\\node_modules\\nw\\nwjs\\nw.exe',
        home: 'C:\\Users\\MOCK_HOME_DIR',
        logs: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\logs',
        module: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Default',
        music: 'C:\\Users\\MOCK_HOME_DIR\\Music',
        pepperFlashSystemPlugin: 'C:\\Users\\DUMMY\\Documents\\GitHub\\MOCK\\node_modules\\nw\\nwjs\\PepperFlash',
        pictures: 'C:\\Users\\MOCK_HOME_DIR\\Pictures',
        temp: 'C:\\Users\\DUMMY\\AppData\\Local\\Temp',
        userData: 'C:\\Users\\DUMMY\\AppData\\Local\\DUMMY_MOCK\\User Data\\Default',
        videos: 'C:\\Users\\MOCK_HOME_DIR\\Videos'
      });
  });
});

