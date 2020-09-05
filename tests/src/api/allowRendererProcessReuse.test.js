const allowRendererProcessReuse = require('@/src/api/allowRendererProcessReuse.js');

describe('allowRendererProcessReuse', () => {
  test('Returns undefined', () => {
    expect(allowRendererProcessReuse())
      .toEqual(undefined);
  });
});
