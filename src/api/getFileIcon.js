
/*
  Electron Docs v10.1.1
  https://www.electronjs.org/docs/api/app#appgetfileiconpath-options

  `app.getFileIcon(path[, options])`

  * `path` String
  * `options` Object (optional)
    * `size` String
      * `small` - 16x16
      * `normal` - 32x32
      * `large` - 48x48 on Linux, 32x32 on Windows, unsupported on OSX.

  Returns `Promise<NativeImage>` - fulfilled with the app's icon, which is a NativeImage.

  * https://github.com/electron/electron/blob/master/docs/api/native-image.md

  Fetches a path's associated icon.

  On Windows, there a 2 kinds of icons:

  * Icons associated with certain file extensions, like `.mp3`, `.png`, etc.
  * Icons inside the file itself, like `.exe`, `.dll`, `.ico`.

  On Linux and OSX, icons depend on the application associated with file mime type.
*/

/**
 * [Description]
 *
 * @return {undefined}  [Description]
 */
const getFileIcon = function () {
};

module.exports = getFileIcon;
