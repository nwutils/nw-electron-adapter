const setJumpList = require('@/src/api/setJumpList.js');

describe('setJumpList', () => {
  test('Returns undefined', () => {
    expect(setJumpList())
      .toEqual(undefined);
  });
});
