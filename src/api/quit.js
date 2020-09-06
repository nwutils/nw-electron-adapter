
/*
  Electron Docs v10.1.1
  https://www.electronjs.org/docs/api/app#appquit

  `app.quit()`

  Try to close all windows. The before-quit event will be emitted first.
  If all windows are successfully closed, the will-quit event will be
  emitted and by default the application will terminate.

  This method guarantees that all beforeunload and unload event handlers
  are correctly executed. It is possible that a window cancels the
  quitting by returning false in the beforeunload event handler.
*/

/**
 * [Description]
 *
 * @return {undefined}  [Description]
 */
const quit = function () {
};

module.exports = quit;
