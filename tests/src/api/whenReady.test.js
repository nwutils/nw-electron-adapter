const whenReady = require('@/src/api/whenReady.js');

describe('whenReady', () => {
  test('Returns undefined', () => {
    expect(whenReady())
      .toEqual(undefined);
  });
});
