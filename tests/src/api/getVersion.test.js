const getVersion = require('@/src/api/getVersion.js');

describe('getVersion', () => {
  test('Returns undefined', () => {
    expect(getVersion())
      .toEqual(undefined);
  });
});
