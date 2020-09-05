const remoteGetCurrentWebContents = require('@/src/events/remoteGetCurrentWebContents.js');

describe('remoteGetCurrentWebContents', () => {
  test('Returns undefined', () => {
    expect(remoteGetCurrentWebContents())
      .toEqual(undefined);
  });
});
