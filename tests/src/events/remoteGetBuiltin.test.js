const remoteGetBuiltin = require('@/src/events/remoteGetBuiltin.js');

describe('remoteGetBuiltin', () => {
  test('Returns undefined', () => {
    expect(remoteGetBuiltin())
      .toEqual(undefined);
  });
});
