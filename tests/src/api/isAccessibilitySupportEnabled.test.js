const isAccessibilitySupportEnabled = require('@/src/api/isAccessibilitySupportEnabled.js');

describe('isAccessibilitySupportEnabled', () => {
  test('Returns undefined', () => {
    expect(isAccessibilitySupportEnabled())
      .toEqual(undefined);
  });
});
