const remoteRequire = require('@/src/events/remoteRequire.js');

describe('remoteRequire', () => {
  test('Returns undefined', () => {
    expect(remoteRequire())
      .toEqual(undefined);
  });
});
