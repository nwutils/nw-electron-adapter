const quit = require('@/src/api/quit.js');

describe('quit', () => {
  test('Returns undefined', () => {
    expect(quit())
      .toEqual(undefined);
  });
});
