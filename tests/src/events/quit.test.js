const quit = require('@/src/events/quit.js');

describe('quit', () => {
  test('Returns undefined', () => {
    expect(quit())
      .toEqual(undefined);
  });
});
