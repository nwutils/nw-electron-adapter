// NOTE:
// I thought this would be an easy `nw.Window.get().show()`. NOPE!
// This feature actually hides *ALL* open windows at once, and is OSX specific.
// It also does not focus any of the windows it shows which would be a bit trickier
// as revealing multiple windows in NW.js will focus the last shown, and blurring them
// all needs to be handled differently on each OS.
//
// We can definately do better what Electron gives you out fo the box in NW.js, however
// it would require creating a Window Management library with it's own API. Users would
// need to have all window operations handled by the library for it to be able to
// hide/show all and deal with focus. Happy to create a repo for
// `nwutils/nw-window-manager` if the feature is desired.

/*
  Electron Docs v10.1.1
  https://www.electronjs.org/docs/api/app#appshow

  `app.show()`
  
  Shows application windows after they were hidden. Does not automatically focus them.
*/

/**
 * [Description]
 *
 * @return {undefined}  [Description]
 */
const show = function () {
};

module.exports = show;
