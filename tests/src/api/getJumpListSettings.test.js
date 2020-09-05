const getJumpListSettings = require('@/src/api/getJumpListSettings.js');

describe('getJumpListSettings', () => {
  test('Returns undefined', () => {
    expect(getJumpListSettings())
      .toEqual(undefined);
  });
});
