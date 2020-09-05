const getName = require('@/src/api/getName.js');

describe('getName', () => {
  test('Returns undefined', () => {
    expect(getName())
      .toEqual(undefined);
  });
});
