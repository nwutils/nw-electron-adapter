const invalidateCurrentActivity = require('@/src/api/invalidateCurrentActivity.js');

describe('invalidateCurrentActivity', () => {
  test('Returns undefined', () => {
    expect(invalidateCurrentActivity())
      .toEqual(undefined);
  });
});
