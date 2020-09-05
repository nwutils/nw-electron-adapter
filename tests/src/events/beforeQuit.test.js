const beforeQuit = require('@/src/events/beforeQuit.js');

describe('beforeQuit', () => {
  test('Returns undefined', () => {
    expect(beforeQuit())
      .toEqual(undefined);
  });
});
