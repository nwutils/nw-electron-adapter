const accessibilitySupportEnabled = require('@/src/api/accessibilitySupportEnabled.js');

describe('accessibilitySupportEnabled', () => {
  test('Returns undefined', () => {
    expect(accessibilitySupportEnabled())
      .toEqual(undefined);
  });
});
