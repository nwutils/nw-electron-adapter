const browserWindowBlur = require('@/src/events/browserWindowBlur.js');

describe('browserWindowBlur', () => {
  test('Returns undefined', () => {
    expect(browserWindowBlur())
      .toEqual(undefined);
  });
});
