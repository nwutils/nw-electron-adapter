const webContentsCreated = require('@/src/events/webContentsCreated.js');

describe('webContentsCreated', () => {
  test('Returns undefined', () => {
    expect(webContentsCreated())
      .toEqual(undefined);
  });
});
