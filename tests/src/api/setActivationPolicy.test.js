const setActivationPolicy = require('@/src/api/setActivationPolicy.js');

describe('setActivationPolicy', () => {
  test('Returns undefined', () => {
    expect(setActivationPolicy())
      .toEqual(undefined);
  });
});
