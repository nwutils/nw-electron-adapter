const requestSingleInstanceLock = require('@/src/api/requestSingleInstanceLock.js');

describe('requestSingleInstanceLock', () => {
  test('Returns undefined', () => {
    expect(requestSingleInstanceLock())
      .toEqual(undefined);
  });
});
