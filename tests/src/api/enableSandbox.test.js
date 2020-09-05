const enableSandbox = require('@/src/api/enableSandbox.js');

describe('enableSandbox', () => {
  test('Returns undefined', () => {
    expect(enableSandbox())
      .toEqual(undefined);
  });
});
