const getLoginItemSettings = require('@/src/api/getLoginItemSettings.js');

describe('getLoginItemSettings', () => {
  test('Returns undefined', () => {
    expect(getLoginItemSettings())
      .toEqual(undefined);
  });
});
