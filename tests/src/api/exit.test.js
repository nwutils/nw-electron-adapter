const exit = require('@/src/api/exit.js');

describe('exit', () => {
  test('Returns undefined', () => {
    expect(exit())
      .toEqual(undefined);
  });
});
