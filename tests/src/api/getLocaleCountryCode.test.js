const getLocaleCountryCode = require('@/src/api/getLocaleCountryCode.js');

describe('getLocaleCountryCode', () => {
  test('Returns undefined', () => {
    expect(getLocaleCountryCode())
      .toEqual(undefined);
  });
});
