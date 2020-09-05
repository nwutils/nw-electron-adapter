const name = require('@/src/api/name.js');

describe('name', () => {
  test('Returns undefined', () => {
    expect(name())
      .toEqual(undefined);
  });
});
