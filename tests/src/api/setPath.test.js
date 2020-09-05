const setPath = require('@/src/api/setPath.js');

describe('setPath', () => {
  test('Returns undefined', () => {
    expect(setPath())
      .toEqual(undefined);
  });
});
