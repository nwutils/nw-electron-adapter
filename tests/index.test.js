const nwElectronAdapter = require('@/index.js');

describe('nwElectronAdapter', () => {
  const keys = [
    'on',
    'quit',
    'exit',
    'relaunch',
    'isReady',
    'whenReady',
    'focus',
    'hide',
    'show',
    'setAppLogsPath',
    'getAppPath',
    'getPath',
    'getFileIcon',
    'setPath',
    'getVersion',
    'getName',
    'setName',
    'getLocale',
    'getLocaleCountryCode',
    'addRecentDocument',
    'clearRecentDocuments',
    'setAsDefaultProtocolClient',
    'removeAsDefaultProtocolClient',
    'isDefaultProtocolClient',
    'getApplicationNameForProtocol',
    'setUserTasks',
    'getJumpListSettings',
    'setJumpList',
    'requestSingleInstanceLock',
    'hasSingleInstanceLock',
    'releaseSingleInstanceLock',
    'setUserActivity',
    'getCurrentActivityType',
    'invalidateCurrentActivity',
    'resignCurrentActivity',
    'updateCurrentActivity',
    'setAppUserModelId',
    'setActivationPolicy',
    'importCertificate',
    'disableHardwareAcceleration',
    'disableDomainBlockingFor3DAPIs',
    'getAppMetrics',
    'getGPUFeatureStatus',
    'getGPUInfo',
    'setBadgeCount',
    'getBadgeCount',
    'isUnityRunning',
    'getLoginItemSettings',
    'setLoginItemSettings',
    'isAccessibilitySupportEnabled',
    'setAccessibilitySupportEnabled',
    'showAboutPanel',
    'setAboutPanelOptions',
    'isEmojiPanelSupported',
    'showEmojiPanel',
    'startAccessingSecurityScopedResource',
    'enableSandbox',
    'isInApplicationsFolder',
    'moveToApplicationsFolder',
    'isSecureKeyboardEntryEnabled',
    'setSecureKeyboardEntryEnabled',
    'accessibilitySupportEnabled',
    'applicationMenu',
    'badgeCount',
    'commandLine',
    'dock',
    'isPackaged',
    'name',
    'userAgentFallback',
    'allowRendererProcessReuse'
  ];

  afterEach(() => {
    delete global.win;
  });

  test('Returns default Objects', () => {
    expect(Object.keys(nwElectronAdapter()))
      .toEqual(keys);
  });

  test('global.win is set if passed in', () => {
    const win = {
      console: {
        log: jest.fn()
      }
    };

    nwElectronAdapter(win);

    expect(global.win)
      .toEqual(win);
  })
});

