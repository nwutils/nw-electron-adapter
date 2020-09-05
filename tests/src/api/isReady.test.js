const isReady = require('@/src/api/isReady.js');

describe('isReady', () => {
  test('Returns undefined', () => {
    expect(isReady())
      .toEqual(undefined);
  });
});
