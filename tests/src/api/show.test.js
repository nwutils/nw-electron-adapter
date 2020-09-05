const show = require('@/src/api/show.js');

describe('show', () => {
  test('Returns undefined', () => {
    expect(show())
      .toEqual(undefined);
  });
});
