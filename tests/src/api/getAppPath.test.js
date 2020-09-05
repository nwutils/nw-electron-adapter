const getAppPath = require('@/src/api/getAppPath.js');

describe('getAppPath', () => {
  test('Returns path if in NW.js', () => {
    expect(getAppPath())
      .toEqual('C:/Users/DUMMY/Documents/GitHub/MOCK');
  });

  test('Does not return path if outside of NW.js', () => {
    delete global.nw;

    expect(getAppPath())
      .toEqual(undefined);
  });
});
