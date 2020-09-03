const helpers = require('./src/helpers.js');
const notPlanned = helpers.notPlanned;
const notPlannedNodeDefaultApplicationProtocol = helpers.notPlannedNodeDefaultApplicationProtocol;

const api = {
  on: notPlanned,
  quit: notPlanned,
  exit: notPlanned,
  relaunch: notPlanned,
  isReady: notPlanned,
  whenReady: notPlanned,
  focus: notPlanned,
  hide: notPlanned,
  show: notPlanned,
  setAppLogsPath: notPlanned,
  getAppPath: require('./src/api/getAppPath.js'),
  getPath: require('./src/api/getPath.js'),
  getFileIcon: notPlanned,
  setPath: notPlanned,
  getVersion: notPlanned,
  getName: notPlanned,
  setName: notPlanned,
  getLocale: notPlanned,
  getLocaleCountryCode: notPlanned,
  addRecentDocument: notPlanned,
  clearRecentDocuments: notPlanned,
  setAsDefaultProtocolClient: notPlannedNodeDefaultApplicationProtocol,
  removeAsDefaultProtocolClient: notPlannedNodeDefaultApplicationProtocol,
  isDefaultProtocolClient: notPlannedNodeDefaultApplicationProtocol,
  getApplicationNameForProtocol: notPlannedNodeDefaultApplicationProtocol,
  setUserTasks: notPlanned,
  getJumpListSettings: notPlanned,
  setJumpList: notPlanned,
  requestSingleInstanceLock: notPlanned,
  hasSingleInstanceLock: notPlanned,
  releaseSingleInstanceLock: notPlanned,
  setUserActivity: notPlanned,
  getCurrentActivityType: notPlanned,
  invalidateCurrentActivity: notPlanned,
  resignCurrentActivity: notPlanned,
  updateCurrentActivity: notPlanned,
  setAppUserModelId: notPlanned,
  setActivationPolicy: notPlanned,
  importCertificate: notPlanned,
  disableHardwareAcceleration: notPlanned,
  disableDomainBlockingFor3DAPIs: notPlanned,
  getAppMetrics: notPlanned,
  getGPUFeatureStatus: notPlanned,
  getGPUInfo: notPlanned,
  setBadgeCount: notPlanned,
  getBadgeCount: notPlanned,
  isUnityRunning: notPlanned,
  getLoginItemSettings: notPlanned,
  setLoginItemSettings: notPlanned,
  isAccessibilitySupportEnabled: notPlanned,
  setAccessibilitySupportEnabled: notPlanned,
  showAboutPanel: notPlanned,
  setAboutPanelOptions: notPlanned,
  isEmojiPanelSupported: notPlanned,
  showEmojiPanel: notPlanned,
  startAccessingSecurityScopedResource: notPlanned,
  enableSandbox: notPlanned,
  isInApplicationsFolder: notPlanned,
  moveToApplicationsFolder: notPlanned,
  isSecureKeyboardEntryEnabled: notPlanned,
  setSecureKeyboardEntryEnabled: notPlanned,
  accessibilitySupportEnabled: notPlanned,
  applicationMenu: notPlanned,
  badgeCount: notPlanned,
  commandLine: notPlanned,
  dock: notPlanned,
  isPackaged: notPlanned,
  name: notPlanned,
  userAgentFallback: notPlanned,
  allowRendererProcessReuse: notPlanned
};

const app = function (win) {
  if (win) {
    global.win = win;
  }
  return api;
};

for (let key in api) {
  app[key] = api[key];
}

module.exports = app;
