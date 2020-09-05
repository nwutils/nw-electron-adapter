const setLoginItemSettings = require('@/src/api/setLoginItemSettings.js');

describe('setLoginItemSettings', () => {
  test('Returns undefined', () => {
    expect(setLoginItemSettings())
      .toEqual(undefined);
  });
});
