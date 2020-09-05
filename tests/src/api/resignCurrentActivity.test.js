const resignCurrentActivity = require('@/src/api/resignCurrentActivity.js');

describe('resignCurrentActivity', () => {
  test('Returns undefined', () => {
    expect(resignCurrentActivity())
      .toEqual(undefined);
  });
});
