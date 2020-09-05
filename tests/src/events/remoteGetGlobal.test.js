const remoteGetGlobal = require('@/src/events/remoteGetGlobal.js');

describe('remoteGetGlobal', () => {
  test('Returns undefined', () => {
    expect(remoteGetGlobal())
      .toEqual(undefined);
  });
});
