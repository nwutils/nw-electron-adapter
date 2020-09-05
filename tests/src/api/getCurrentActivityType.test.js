const getCurrentActivityType = require('@/src/api/getCurrentActivityType.js');

describe('getCurrentActivityType', () => {
  test('Returns undefined', () => {
    expect(getCurrentActivityType())
      .toEqual(undefined);
  });
});
