const browserWindowCreated = require('@/src/events/browserWindowCreated.js');

describe('browserWindowCreated', () => {
  test('Returns undefined', () => {
    expect(browserWindowCreated())
      .toEqual(undefined);
  });
});
