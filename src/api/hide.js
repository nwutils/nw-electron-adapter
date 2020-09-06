// NOTE:
// I thought this would be an easy `nw.Window.get().hide()`. NOPE!
// This feature actually hides *ALL* open windows at once, and is OSX specific.
// We can definately do better than that with NW.js however it would require creating
// a Window Management library with it's own API. Users would need to have all window
// operations handled by the library for it to be able to hide/show all and deal with
// focus. Happy to create a repo for the `nwutils/nw-window-manager` if the feature is
// desired.

/*
  Electron Docs v10.1.1
  https://www.electronjs.org/docs/api/app#apphide

  `app.hide()`
  
  Hides all application windows without minimizing them.
*/

/**
 * [Description]
 *
 * @return {undefined}  [Description]
 */
const hide = function () {
};

module.exports = hide;
