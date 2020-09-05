const openFile = require('@/src/events/openFile.js');

describe('openFile', () => {
  test('Returns undefined', () => {
    expect(openFile())
      .toEqual(undefined);
  });
});
