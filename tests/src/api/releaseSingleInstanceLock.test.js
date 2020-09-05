const releaseSingleInstanceLock = require('@/src/api/releaseSingleInstanceLock.js');

describe('releaseSingleInstanceLock', () => {
  test('Returns undefined', () => {
    expect(releaseSingleInstanceLock())
      .toEqual(undefined);
  });
});
