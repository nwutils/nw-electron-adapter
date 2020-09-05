const setUserTasks = require('@/src/api/setUserTasks.js');

describe('setUserTasks', () => {
  test('Returns undefined', () => {
    expect(setUserTasks())
      .toEqual(undefined);
  });
});
