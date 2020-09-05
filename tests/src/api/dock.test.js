const dock = require('@/src/api/dock.js');

describe('dock', () => {
  test('Returns undefined', () => {
    expect(dock())
      .toEqual(undefined);
  });
});
