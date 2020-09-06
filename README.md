# nw-electron-adapter

[![Node.js CI](https://github.com/nwutils/nw-electron-adapter/workflows/Node.js%20CI/badge.svg?branch=master)](https://github.com/nwutils/nw-electron-adapter/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster) [![Test Coverage: 100%](https://img.shields.io/badge/Test%20Coverage-100%25-brightgreen.svg?logo=jest)](https://coveralls.io/github/tjw-lint/jest-serializer-vue-tjw) [![Lint Coverage: 100%](https://img.shields.io/badge/Lint%20Coverage-100%25-brightgreen.svg?logo=eslint)](https://github.com/tjw-lint) [![Compatible with Node 8.3+](https://img.shields.io/badge/Node-%3E%3D8.3.0-brightgreen.svg?logo=Node.js)](/package.json) [![Code of Conduct: No Ideologies](https://img.shields.io/badge/CoC-No%20Ideologies-blue)](/CODE_OF_CONDUCT.md) [![MIT Licensed](https://img.shields.io/badge/License-MIT-brightgreen)](/LICENSE)

An adapter for Electron's API inside NW.js


## Goal

```js
// Be able to replace
const app = require('electron').app;

// with
const app = require('nw-electron-adapter')(window);
// and have most of the API work the same in NW.js.
```


## Usage

1. `npm install --save nw-electron-adapter`
1. Replace `const app = require('electron').app;` or `const {app} = require('electron');` with `const app = require('nw-electron-adapter')(window);`
1. Reference the below API Parity Tracker and make issues/PR's for missing features you need.


## API Parity Tracker

* https://www.electronjs.org/docs/api/app

**Statuses:**

* 🌑🌑🌑🌑 Not Planned
* 🌗🌑🌑🌑 Proposed (PR or detailed issue)
* 🌕🌑🌑🌑 Planned
* 🌕🌗🌑🌑 Started
* 🌕🌕🌑🌑 Working
* 🌕🌕🌕🌑 Documented
* 🌕🌕🌕🌗 Tested
* 🌕🌕🌕🌕 Released

**API**                                                                                   | **Rating** | **Status**
:--                                                                                       | :--        | :--
[`quit`](src/api/quit.js)                                                                 | 🌑🌑🌑🌑 | Not Planned
[`exit`](src/api/exit.js)                                                                 | 🌑🌑🌑🌑 | Not Planned
[`relaunch`](src/api/relaunch.js)                                                         | 🌑🌑🌑🌑 | Not Planned
[`isReady`](src/api/isReady.js)                                                           | 🌑🌑🌑🌑 | Not Planned
[`whenReady`](src/api/whenReady.js)                                                       | 🌑🌑🌑🌑 | Not Planned
[`focus`](src/api/focus.js)                                                               | 🌑🌑🌑🌑 | Not Planned
[`hide`](src/api/hide.js)                                                                 | 🌑🌑🌑🌑 | Not Planned
[`show`](src/api/show.js)                                                                 | 🌑🌑🌑🌑 | Not Planned
[`setAppLogsPath`](src/api/setAppLogsPath.js)                                             | 🌑🌑🌑🌑 | Not Planned
[`getAppPath`](src/api/getAppPath.js)                                                     | 🌕🌕🌕🌕 | Released v1.0.0
[`getPath`](src/api/getPath.js)                                                           | 🌕🌕🌕🌕 | Released v1.0.0
[`getFileIcon`](src/api/getFileIcon.js)                                                   | 🌑🌑🌑🌑 | Not Planned
[`setPath`](src/api/setPath.js)                                                           | 🌑🌑🌑🌑 | Not Planned
[`getVersion`](src/api/getVersion.js)                                                     | 🌑🌑🌑🌑 | Not Planned
[`getName`](src/api/getName.js)                                                           | 🌑🌑🌑🌑 | Not Planned
[`setName`](src/api/setName.js)                                                           | 🌑🌑🌑🌑 | Not Planned
[`getLocale`](src/api/getLocale.js)                                                       | 🌑🌑🌑🌑 | Not Planned
[`getLocaleCountryCode`](src/api/getLocaleCountryCode.js)                                 | 🌑🌑🌑🌑 | Not Planned
[`addRecentDocument`](src/api/addRecentDocument.js)                                       | 🌑🌑🌑🌑 | Not Planned
[`clearRecentDocuments`](src/api/clearRecentDocuments.js)                                 | 🌑🌑🌑🌑 | Not Planned
`setAsDefaultProtocolClient`                                                              | 🌕🌑🌑🌑 | [Planned externaly](https://github.com/nwutils/node-default-application-protocol)
`removeAsDefaultProtocolClient`                                                           | 🌕🌑🌑🌑 | [Planned externaly](https://github.com/nwutils/node-default-application-protocol)
`isDefaultProtocolClient`                                                                 | 🌕🌑🌑🌑 | [Planned externaly](https://github.com/nwutils/node-default-application-protocol)
`getApplicationNameForProtocol`                                                           | 🌕🌑🌑🌑 | [Planned externaly](https://github.com/nwutils/node-default-application-protocol)
[`setUserTasks`](src/api/setUserTasks.js)                                                 | 🌑🌑🌑🌑 | Not Planned
[`getJumpListSettings`](src/api/getJumpListSettings.js)                                   | 🌑🌑🌑🌑 | Not Planned
[`setJumpList`](src/api/setJumpList.js)                                                   | 🌑🌑🌑🌑 | Not Planned
[`requestSingleInstanceLock`](src/api/requestSingleInstanceLock.js)                       | 🌑🌑🌑🌑 | Not Planned
[`hasSingleInstanceLock`](src/api/hasSingleInstanceLock.js)                               | 🌑🌑🌑🌑 | Not Planned
[`releaseSingleInstanceLock`](src/api/releaseSingleInstanceLock.js)                       | 🌑🌑🌑🌑 | Not Planned
[`setUserActivity`](src/api/setUserActivity.js)                                           | 🌑🌑🌑🌑 | Not Planned
[`getCurrentActivityType`](src/api/getCurrentActivityType.js)                             | 🌑🌑🌑🌑 | Not Planned
[`invalidateCurrentActivity`](src/api/invalidateCurrentActivity.js)                       | 🌑🌑🌑🌑 | Not Planned
[`resignCurrentActivity`](src/api/resignCurrentActivity.js)                               | 🌑🌑🌑🌑 | Not Planned
[`updateCurrentActivity`](src/api/updateCurrentActivity.js)                               | 🌑🌑🌑🌑 | Not Planned
[`setAppUserModelId`](src/api/setAppUserModelId.js)                                       | 🌑🌑🌑🌑 | Not Planned
[`setActivationPolicy`](src/api/setActivationPolicy.js)                                   | 🌑🌑🌑🌑 | Not Planned
[`importCertificate`](src/api/importCertificate.js)                                       | 🌑🌑🌑🌑 | Not Planned
[`disableHardwareAcceleration`](src/api/disableHardwareAcceleration.js)                   | 🌑🌑🌑🌑 | Not Planned
[`disableDomainBlockingFor3DAPIs`](src/api/disableDomainBlockingFor3DAPIs.js)             | 🌑🌑🌑🌑 | Not Planned
[`getAppMetrics`](src/api/getAppMetrics.js)                                               | 🌑🌑🌑🌑 | Not Planned
[`getGPUFeatureStatus`](src/api/getGPUFeatureStatus.js)                                   | 🌑🌑🌑🌑 | Not Planned
[`getGPUInfo`](src/api/getGPUInfo.js)                                                     | 🌑🌑🌑🌑 | Not Planned
[`setBadgeCount`](src/api/setBadgeCount.js)                                               | 🌑🌑🌑🌑 | Not Planned
[`getBadgeCount`](src/api/getBadgeCount.js)                                               | 🌑🌑🌑🌑 | Not Planned
[`isUnityRunning`](src/api/isUnityRunning.js)                                             | 🌑🌑🌑🌑 | Not Planned
[`getLoginItemSettings`](src/api/getLoginItemSettings.js)                                 | 🌑🌑🌑🌑 | Not Planned
[`setLoginItemSettings`](src/api/setLoginItemSettings.js)                                 | 🌑🌑🌑🌑 | Not Planned
[`isAccessibilitySupportEnabled`](src/api/isAccessibilitySupportEnabled.js)               | 🌑🌑🌑🌑 | Not Planned
[`setAccessibilitySupportEnabled`](src/api/setAccessibilitySupportEnabled.js)             | 🌑🌑🌑🌑 | Not Planned
[`showAboutPanel`](src/api/showAboutPanel.js)                                             | 🌑🌑🌑🌑 | Not Planned
[`setAboutPanelOptions`](src/api/setAboutPanelOptions.js)                                 | 🌑🌑🌑🌑 | Not Planned
[`isEmojiPanelSupported`](src/api/isEmojiPanelSupported.js)                               | 🌑🌑🌑🌑 | Not Planned
[`showEmojiPanel`](src/api/showEmojiPanel.js)                                             | 🌑🌑🌑🌑 | Not Planned
[`startAccessingSecurityScopedResource`](src/api/startAccessingSecurityScopedResource.js) | 🌑🌑🌑🌑 | Not Planned
[`enableSandbox`](src/api/enableSandbox.js)                                               | 🌑🌑🌑🌑 | Not Planned
[`isInApplicationsFolder`](src/api/isInApplicationsFolder.js)                             | 🌑🌑🌑🌑 | Not Planned
[`moveToApplicationsFolder`](src/api/moveToApplicationsFolder.js)                         | 🌑🌑🌑🌑 | Not Planned
[`isSecureKeyboardEntryEnabled`](src/api/isSecureKeyboardEntryEnabled.js)                 | 🌑🌑🌑🌑 | Not Planned
[`setSecureKeyboardEntryEnabled`](src/api/setSecureKeyboardEntryEnabled.js)               | 🌑🌑🌑🌑 | Not Planned
[`accessibilitySupportEnabled`](src/api/accessibilitySupportEnabled.js)                   | 🌑🌑🌑🌑 | Not Planned
[`applicationMenu`](src/api/applicationMenu.js)                                           | 🌑🌑🌑🌑 | Not Planned
[`badgeCount`](src/api/badgeCount.js)                                                     | 🌑🌑🌑🌑 | Not Planned
[`commandLine`](src/api/commandLine.js)                                                   | 🌑🌑🌑🌑 | Not Planned
[`dock`](src/api/dock.js)                                                                 | 🌑🌑🌑🌑 | Not Planned
[`isPackaged`](src/api/isPackaged.js)                                                     | 🌑🌑🌑🌑 | Not Planned
[`name`](src/api/name.js)                                                                 | 🌑🌑🌑🌑 | Not Planned
[`userAgentFallback`](src/api/userAgentFallback.js)                                       | 🌑🌑🌑🌑 | Not Planned
[`allowRendererProcessReuse`](src/api/allowRendererProcessReuse.js)                       | 🌑🌑🌑🌑 | Not Planned





## Events

**Event**                                                                      | **Rating** | **Status**
:--                                                                            | :--        | :--
[`will-finish-launching`](src/events/willFinishLaunching.js)                   | 🌑🌑🌑🌑 | Not Planned
[`ready`](src/events/ready.js)                                                 | 🌑🌑🌑🌑 | Not Planned
[`window-all-closed`](src/events/windowAllClosed.js)                           | 🌑🌑🌑🌑 | Not Planned
[`before-quit`](src/events/beforeQuit.js)                                      | 🌑🌑🌑🌑 | Not Planned
[`will-quit`](src/events/willQuit.js)                                          | 🌑🌑🌑🌑 | Not Planned
[`quit`](src/events/quit.js)                                                   | 🌑🌑🌑🌑 | Not Planned
[`open-file`](src/events/openFile.js)                                          | 🌑🌑🌑🌑 | Not Planned
[`open-url`](src/events/openUrl.js)                                            | 🌑🌑🌑🌑 | Not Planned
[`activate`](src/events/activate.js)                                           | 🌑🌑🌑🌑 | Not Planned
[`continue-activity`](src/events/continueActivity.js)                          | 🌑🌑🌑🌑 | Not Planned
[`will-continue-activity`](src/events/willContinueActivity.js)                 | 🌑🌑🌑🌑 | Not Planned
[`continue-activity-error`](src/events/continueActivityError.js)               | 🌑🌑🌑🌑 | Not Planned
[`activity-was-continued`](src/events/activityWasContinued.js)                 | 🌑🌑🌑🌑 | Not Planned
[`update-activity-state`](src/events/updateActivityState.js)                   | 🌑🌑🌑🌑 | Not Planned
[`new-window-for-tab`](src/events/newWindowForTab.js)                          | 🌑🌑🌑🌑 | Not Planned
[`browser-window-blur`](src/events/browserWindowBlur.js)                       | 🌑🌑🌑🌑 | Not Planned
[`browser-window-focus`](src/events/browserWindowFocus.js)                     | 🌑🌑🌑🌑 | Not Planned
[`browser-window-created`](src/events/browserWindowCreated.js)                 | 🌑🌑🌑🌑 | Not Planned
[`web-contents-created`](src/events/webContentsCreated.js)                     | 🌑🌑🌑🌑 | Not Planned
[`certificate-error`](src/events/certificateError.js)                          | 🌑🌑🌑🌑 | Not Planned
[`select-client-certificate`](src/events/selectClientCertificate.js)           | 🌑🌑🌑🌑 | Not Planned
[`login`](src/events/login.js)                                                 | 🌑🌑🌑🌑 | Not Planned
[`gpu-info-update`](src/events/gpuInfoUpdate.js)                               | 🌑🌑🌑🌑 | Not Planned
[`gpu-process-crashed`](src/events/gpuProcessCrashed.js)                       | 🌑🌑🌑🌑 | Not Planned
[`renderer-process-crashed`](src/events/rendererProcessCrashed.js)             | 🌑🌑🌑🌑 | Not Planned
[`accessibility-support-changed`](src/events/accessibilitySupportChanged.js)   | 🌑🌑🌑🌑 | Not Planned
[`session-created`](src/events/sessionCreated.js)                              | 🌑🌑🌑🌑 | Not Planned
[`second-instance`](src/events/secondInstance.js)                              | 🌑🌑🌑🌑 | Not Planned
[`desktop-capturer-get-sources`](src/events/desktopCapturerGetSources.js)      | 🌑🌑🌑🌑 | Not Planned
[`remote-require`](src/events/remoteRequire.js)                                | 🌑🌑🌑🌑 | Not Planned
[`remote-get-global`](src/events/remoteGetGlobal.js)                           | 🌑🌑🌑🌑 | Not Planned
[`remote-get-builtin`](src/events/remoteGetBuiltin.js)                         | 🌑🌑🌑🌑 | Not Planned
[`remote-get-current-window`](src/events/remoteGetCurrentWindow.js)            | 🌑🌑🌑🌑 | Not Planned
[`remote-get-current-web-contents`](src/events/remoteGetCurrentWebContents.js) | 🌑🌑🌑🌑 | Not Planned
