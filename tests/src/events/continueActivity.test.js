const continueActivity = require('@/src/events/continueActivity.js');

describe('continueActivity', () => {
  test('Returns undefined', () => {
    expect(continueActivity())
      .toEqual(undefined);
  });
});
