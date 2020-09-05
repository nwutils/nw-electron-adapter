const os = jest.requireActual('os');

const osMock = Object.assign({}, os, {
  homedir: function () {
    return 'C:\\Users\\MOCK_HOME_DIR';
  },
  tmpdir: function () {
    return 'C:\\Users\\DUMMY\\AppData\\Local\\Temp';
  }
});

module.exports = osMock;
