const relaunch = require('@/src/api/relaunch.js');

describe('relaunch', () => {
  test('Returns undefined', () => {
    expect(relaunch())
      .toEqual(undefined);
  });
});
