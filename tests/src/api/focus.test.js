const focus = require('@/src/api/focus.js');

describe('focus', () => {
  test('Returns undefined', () => {
    expect(focus())
      .toEqual(undefined);
  });
});
