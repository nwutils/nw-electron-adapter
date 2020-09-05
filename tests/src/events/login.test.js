const login = require('@/src/events/login.js');

describe('login', () => {
  test('Returns undefined', () => {
    expect(login())
      .toEqual(undefined);
  });
});
