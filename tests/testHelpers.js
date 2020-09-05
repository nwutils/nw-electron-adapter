const testHelpers = {
  title: 'nw-electron-adapter',
  /**
   * Converts from Windows Slashes to Unix slashes.
   *
   * @param  {string} str  Any string
   * @return {string}      Converted string
   */
  slasher: function (str) {
    return str.split('\\').join('/');
  }
};

module.exports = testHelpers;
