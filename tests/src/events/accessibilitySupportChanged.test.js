const accessibilitySupportChanged = require('@/src/events/accessibilitySupportChanged.js');

describe('accessibilitySupportChanged', () => {
  test('Returns undefined', () => {
    expect(accessibilitySupportChanged())
      .toEqual(undefined);
  });
});
