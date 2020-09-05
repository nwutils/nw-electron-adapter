const disableHardwareAcceleration = require('@/src/api/disableHardwareAcceleration.js');

describe('disableHardwareAcceleration', () => {
  test('Returns undefined', () => {
    expect(disableHardwareAcceleration())
      .toEqual(undefined);
  });
});
