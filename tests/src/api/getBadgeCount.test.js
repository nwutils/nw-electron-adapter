const getBadgeCount = require('@/src/api/getBadgeCount.js');

describe('getBadgeCount', () => {
  test('Returns undefined', () => {
    expect(getBadgeCount())
      .toEqual(undefined);
  });
});
