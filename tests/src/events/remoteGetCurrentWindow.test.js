const remoteGetCurrentWindow = require('@/src/events/remoteGetCurrentWindow.js');

describe('remoteGetCurrentWindow', () => {
  test('Returns undefined', () => {
    expect(remoteGetCurrentWindow())
      .toEqual(undefined);
  });
});
