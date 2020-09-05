const activate = require('@/src/events/activate.js');

describe('activate', () => {
  test('Returns undefined', () => {
    expect(activate())
      .toEqual(undefined);
  });
});
