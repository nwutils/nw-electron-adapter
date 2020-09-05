const hide = require('@/src/api/hide.js');

describe('hide', () => {
  test('Returns undefined', () => {
    expect(hide())
      .toEqual(undefined);
  });
});
