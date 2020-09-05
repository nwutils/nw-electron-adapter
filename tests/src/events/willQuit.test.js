const willQuit = require('@/src/events/willQuit.js');

describe('willQuit', () => {
  test('Returns undefined', () => {
    expect(willQuit())
      .toEqual(undefined);
  });
});
