const setAccessibilitySupportEnabled = require('@/src/api/setAccessibilitySupportEnabled.js');

describe('setAccessibilitySupportEnabled', () => {
  test('Returns undefined', () => {
    expect(setAccessibilitySupportEnabled())
      .toEqual(undefined);
  });
});
