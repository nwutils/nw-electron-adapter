const browserWindowFocus = require('@/src/events/browserWindowFocus.js');

describe('browserWindowFocus', () => {
  test('Returns undefined', () => {
    expect(browserWindowFocus())
      .toEqual(undefined);
  });
});
