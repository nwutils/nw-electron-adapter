
/*
  Electron Docs v10.1.1
  https://www.electronjs.org/docs/api/app#appaccessibilitysupportenabled-macos-windows

  `app.accessibilitySupportEnabled()` - Windows, OSX

  A `Boolean` property that's `true` if Chrome's accessibility support is
  enabled, `false` otherwise. This property will be `true` if the use of
  assistive technologies, such as screen readers, has been detected.
  Setting this property to `true` manually enables Chrome's accessibility
  support, allowing developers to expose accessibility switch to users in
  application settings.

  See Chromium's accessibility docs for more details. Disabled by default.

  * https://www.chromium.org/developers/design-documents/accessibility

  This API must be called after the `ready` event is emitted.

  **Note:** Rendering accessibility tree can significantly affect the performance of your app. It should not be enabled by default.
*/

/**
 * [Description]
 *
 * @return {undefined}  [Description]
 */
const accessibilitySupportEnabled = function () {
};

module.exports = accessibilitySupportEnabled;
