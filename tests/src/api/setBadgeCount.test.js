const setBadgeCount = require('@/src/api/setBadgeCount.js');

describe('setBadgeCount', () => {
  test('Returns undefined', () => {
    expect(setBadgeCount())
      .toEqual(undefined);
  });
});
