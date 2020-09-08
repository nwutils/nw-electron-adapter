
/*
  Electron Docs v10.1.1
  https://www.electronjs.org/docs/api/app#appaddrecentdocumentpath-macos-windows

  `app.addRecentDocument(path)` Windows, OSX
    * `path` String

  Adds `path` to the recent documents list.

  This list is managed by the OS. On Windows, you can visit the list from the task
  bar, and on macOS, you can visit it from dock menu.
*/

/**
 * Adds the given path to the OS's list of recently opened documents.
 *
 * @return {undefined}  Nothing returned. Just sets value or throws if error occurred.
 */
const addRecentDocument = function () {
};

module.exports = addRecentDocument;
