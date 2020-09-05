const setUserActivity = require('@/src/api/setUserActivity.js');

describe('setUserActivity', () => {
  test('Returns undefined', () => {
    expect(setUserActivity())
      .toEqual(undefined);
  });
});
