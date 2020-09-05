const hasSingleInstanceLock = require('@/src/api/hasSingleInstanceLock.js');

describe('hasSingleInstanceLock', () => {
  test('Returns undefined', () => {
    expect(hasSingleInstanceLock())
      .toEqual(undefined);
  });
});
