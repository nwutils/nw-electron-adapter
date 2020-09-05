const sessionCreated = require('@/src/events/sessionCreated.js');

describe('sessionCreated', () => {
  test('Returns undefined', () => {
    expect(sessionCreated())
      .toEqual(undefined);
  });
});
