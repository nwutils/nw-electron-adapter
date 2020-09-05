const willContinueActivity = require('@/src/events/willContinueActivity.js');

describe('willContinueActivity', () => {
  test('Returns undefined', () => {
    expect(willContinueActivity())
      .toEqual(undefined);
  });
});
