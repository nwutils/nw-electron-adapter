const updateCurrentActivity = require('@/src/api/updateCurrentActivity.js');

describe('updateCurrentActivity', () => {
  test('Returns undefined', () => {
    expect(updateCurrentActivity())
      .toEqual(undefined);
  });
});
