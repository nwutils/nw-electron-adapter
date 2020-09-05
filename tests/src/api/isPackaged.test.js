const isPackaged = require('@/src/api/isPackaged.js');

describe('isPackaged', () => {
  test('Returns undefined', () => {
    expect(isPackaged())
      .toEqual(undefined);
  });
});
