const badgeCount = require('@/src/api/badgeCount.js');

describe('badgeCount', () => {
  test('Returns undefined', () => {
    expect(badgeCount())
      .toEqual(undefined);
  });
});
