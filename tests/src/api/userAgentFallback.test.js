const userAgentFallback = require('@/src/api/userAgentFallback.js');

describe('userAgentFallback', () => {
  test('Returns undefined', () => {
    expect(userAgentFallback())
      .toEqual(undefined);
  });
});
