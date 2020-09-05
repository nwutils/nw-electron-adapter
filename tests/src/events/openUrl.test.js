const openUrl = require('@/src/events/openUrl.js');

describe('openUrl', () => {
  test('Returns undefined', () => {
    expect(openUrl())
      .toEqual(undefined);
  });
});
