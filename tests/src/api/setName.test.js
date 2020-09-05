const setName = require('@/src/api/setName.js');

describe('setName', () => {
  test('Returns undefined', () => {
    expect(setName())
      .toEqual(undefined);
  });
});
