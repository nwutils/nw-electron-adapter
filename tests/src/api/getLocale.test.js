const getLocale = require('@/src/api/getLocale.js');

describe('getLocale', () => {
  test('Returns undefined', () => {
    expect(getLocale())
      .toEqual(undefined);
  });
});
