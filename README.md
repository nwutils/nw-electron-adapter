# nw-electron-adapter

An adapter for Electron's API inside NW.js


## Goal

```js
// Be able to replace
const app = require('electron');
// with
const app = require('nw-electron-adapter')(window);
// and have most of the API work the same.
```

## API Reference

* https://www.electronjs.org/docs/api/app

## Parity Tracker

**Statuses:**

* 🌑🌑🌑🌑 Not Planned
* 🌗🌑🌑🌑 Proposed (PR or detailed issue)
* 🌕🌑🌑🌑 Planned
* 🌕🌗🌑🌑 Started
* 🌕🌕🌑🌑 Working
* 🌕🌕🌕🌑 Documented
* 🌕🌕🌕🌗 Tested
* 🌕🌕🌕🌕 Released

**API**                                | **Rating** | **Status**  | **Documentation**
:--                                    | :--        | :--         | :--
`quit`                                 | 🌑🌑🌑🌑 | Not Planned | []()
`exit`                                 | 🌑🌑🌑🌑 | Not Planned | []()
`relaunch`                             | 🌑🌑🌑🌑 | Not Planned | []()
`isReady`                              | 🌑🌑🌑🌑 | Not Planned | []()
`whenReady`                            | 🌑🌑🌑🌑 | Not Planned | []()
`focus`                                | 🌑🌑🌑🌑 | Not Planned | []()
`hide`                                 | 🌕🌑🌑🌑 | Planned     | []()
`show`                                 | 🌕🌑🌑🌑 | Planned     | []()
`setAppLogsPath`                       | 🌑🌑🌑🌑 | Not Planned | []()
`getAppPath`                           | 🌕🌕🌕🌗 | Tested      | [Documentation](src/api/getAppPath.js)
`getPath`                              | 🌕🌕🌕🌑 | Documented  | [Documentation](src/api/getPath.js)
`getFileIcon`                          | 🌑🌑🌑🌑 | Not Planned | []()
`setPath`                              | 🌑🌑🌑🌑 | Not Planned | []()
`getVersion`                           | 🌑🌑🌑🌑 | Not Planned | []()
`getName`                              | 🌑🌑🌑🌑 | Not Planned | []()
`setName`                              | 🌑🌑🌑🌑 | Not Planned | []()
`getLocale`                            | 🌑🌑🌑🌑 | Not Planned | []()
`getLocaleCountryCode`                 | 🌑🌑🌑🌑 | Not Planned | []()
`addRecentDocument`                    | 🌑🌑🌑🌑 | Not Planned | []()
`clearRecentDocuments`                 | 🌑🌑🌑🌑 | Not Planned | []()
`setAsDefaultProtocolClient`           | 🌕🌑🌑🌑 | Planned     | [External Repo](https://github.com/nwutils/node-default-application-protocol)
`removeAsDefaultProtocolClient`        | 🌕🌑🌑🌑 | Planned     | [External Repo](https://github.com/nwutils/node-default-application-protocol)
`isDefaultProtocolClient`              | 🌕🌑🌑🌑 | Planned     | [External Repo](https://github.com/nwutils/node-default-application-protocol)
`getApplicationNameForProtocol`        | 🌕🌑🌑🌑 | Planned     | [External Repo](https://github.com/nwutils/node-default-application-protocol)
`setUserTasks`                         | 🌑🌑🌑🌑 | Not Planned | []()
`getJumpListSettings`                  | 🌑🌑🌑🌑 | Not Planned | []()
`setJumpList`                          | 🌑🌑🌑🌑 | Not Planned | []()
`requestSingleInstanceLock`            | 🌑🌑🌑🌑 | Not Planned | []()
`hasSingleInstanceLock`                | 🌑🌑🌑🌑 | Not Planned | []()
`releaseSingleInstanceLock`            | 🌑🌑🌑🌑 | Not Planned | []()
`setUserActivity`                      | 🌑🌑🌑🌑 | Not Planned | []()
`getCurrentActivityType`               | 🌑🌑🌑🌑 | Not Planned | []()
`invalidateCurrentActivity`            | 🌑🌑🌑🌑 | Not Planned | []()
`resignCurrentActivity`                | 🌑🌑🌑🌑 | Not Planned | []()
`updateCurrentActivity`                | 🌑🌑🌑🌑 | Not Planned | []()
`setAppUserModelId`                    | 🌑🌑🌑🌑 | Not Planned | []()
`setActivationPolicy`                  | 🌑🌑🌑🌑 | Not Planned | []()
`importCertificate`                    | 🌑🌑🌑🌑 | Not Planned | []()
`disableHardwareAcceleration`          | 🌑🌑🌑🌑 | Not Planned | []()
`disableDomainBlockingFor3DAPIs`       | 🌑🌑🌑🌑 | Not Planned | []()
`getAppMetrics`                        | 🌑🌑🌑🌑 | Not Planned | []()
`getGPUFeatureStatus`                  | 🌑🌑🌑🌑 | Not Planned | []()
`getGPUInfo`                           | 🌑🌑🌑🌑 | Not Planned | []()
`setBadgeCount`                        | 🌑🌑🌑🌑 | Not Planned | []()
`getBadgeCount`                        | 🌑🌑🌑🌑 | Not Planned | []()
`isUnityRunning`                       | 🌑🌑🌑🌑 | Not Planned | []()
`getLoginItemSettings`                 | 🌑🌑🌑🌑 | Not Planned | []()
`setLoginItemSettings`                 | 🌑🌑🌑🌑 | Not Planned | []()
`isAccessibilitySupportEnabled`        | 🌑🌑🌑🌑 | Not Planned | []()
`setAccessibilitySupportEnabled`       | 🌑🌑🌑🌑 | Not Planned | []()
`showAboutPanel`                       | 🌑🌑🌑🌑 | Not Planned | []()
`setAboutPanelOptions`                 | 🌑🌑🌑🌑 | Not Planned | []()
`isEmojiPanelSupported`                | 🌑🌑🌑🌑 | Not Planned | []()
`showEmojiPanel`                       | 🌑🌑🌑🌑 | Not Planned | []()
`startAccessingSecurityScopedResource` | 🌑🌑🌑🌑 | Not Planned | []()
`enableSandbox`                        | 🌑🌑🌑🌑 | Not Planned | []()
`isInApplicationsFolder`               | 🌑🌑🌑🌑 | Not Planned | []()
`moveToApplicationsFolder`             | 🌑🌑🌑🌑 | Not Planned | []()
`isSecureKeyboardEntryEnabled`         | 🌑🌑🌑🌑 | Not Planned | []()
`setSecureKeyboardEntryEnabled`        | 🌑🌑🌑🌑 | Not Planned | []()
`accessibilitySupportEnabled`          | 🌑🌑🌑🌑 | Not Planned | []()
`applicationMenu`                      | 🌑🌑🌑🌑 | Not Planned | []()
`badgeCount`                           | 🌑🌑🌑🌑 | Not Planned | []()
`commandLine`                          | 🌑🌑🌑🌑 | Not Planned | []()
`dock`                                 | 🌑🌑🌑🌑 | Not Planned | []()
`isPackaged`                           | 🌑🌑🌑🌑 | Not Planned | []()
`name`                                 | 🌑🌑🌑🌑 | Not Planned | []()
`userAgentFallback`                    | 🌑🌑🌑🌑 | Not Planned | []()
`allowRendererProcessReuse`            | 🌑🌑🌑🌑 | Not Planned | []()





## Events

**Event**                              | **Rating** | **Status**  | **Documentation**
:--                                    | :--        | :--         | :--
`will-finish-launching`                | 🌑🌑🌑🌑 | Not Planned | []()
`ready`                                | 🌑🌑🌑🌑 | Not Planned | []()
`window-all-closed`                    | 🌑🌑🌑🌑 | Not Planned | []()
`before-quit`                          | 🌑🌑🌑🌑 | Not Planned | []()
`will-quit`                            | 🌑🌑🌑🌑 | Not Planned | []()
`quit`                                 | 🌑🌑🌑🌑 | Not Planned | []()
`open-file`                            | 🌑🌑🌑🌑 | Not Planned | []()
`open-url`                             | 🌑🌑🌑🌑 | Not Planned | []()
`activate`                             | 🌑🌑🌑🌑 | Not Planned | []()
`continue-activity`                    | 🌑🌑🌑🌑 | Not Planned | []()
`will-continue-activity`               | 🌑🌑🌑🌑 | Not Planned | []()
`continue-activity-error`              | 🌑🌑🌑🌑 | Not Planned | []()
`activity-was-continued`               | 🌑🌑🌑🌑 | Not Planned | []()
`update-activity-state`                | 🌑🌑🌑🌑 | Not Planned | []()
`new-window-for-tab`                   | 🌑🌑🌑🌑 | Not Planned | []()
`browser-window-blur`                  | 🌑🌑🌑🌑 | Not Planned | []()
`browser-window-focus`                 | 🌑🌑🌑🌑 | Not Planned | []()
`browser-window-created`               | 🌑🌑🌑🌑 | Not Planned | []()
`web-contents-created`                 | 🌑🌑🌑🌑 | Not Planned | []()
`certificate-error`                    | 🌑🌑🌑🌑 | Not Planned | []()
`select-client-certificate`            | 🌑🌑🌑🌑 | Not Planned | []()
`login`                                | 🌑🌑🌑🌑 | Not Planned | []()
`gpu-info-update`                      | 🌑🌑🌑🌑 | Not Planned | []()
`gpu-process-crashed`                  | 🌑🌑🌑🌑 | Not Planned | []()
`renderer-process-crashed`             | 🌑🌑🌑🌑 | Not Planned | []()
`accessibility-support-changed`        | 🌑🌑🌑🌑 | Not Planned | []()
`session-created`                      | 🌑🌑🌑🌑 | Not Planned | []()
`second-instance`                      | 🌑🌑🌑🌑 | Not Planned | []()
`desktop-capturer-get-sources`         | 🌑🌑🌑🌑 | Not Planned | []()
`remote-require`                       | 🌑🌑🌑🌑 | Not Planned | []()
`remote-get-global`                    | 🌑🌑🌑🌑 | Not Planned | []()
`remote-get-builtin`                   | 🌑🌑🌑🌑 | Not Planned | []()
`remote-get-current-window`            | 🌑🌑🌑🌑 | Not Planned | []()
`remote-get-current-web-contents`      | 🌑🌑🌑🌑 | Not Planned | []()
