const windowAllClosed = require('@/src/events/windowAllClosed.js');

describe('windowAllClosed', () => {
  test('Returns undefined', () => {
    expect(windowAllClosed())
      .toEqual(undefined);
  });
});
