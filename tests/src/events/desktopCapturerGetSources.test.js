const desktopCapturerGetSources = require('@/src/events/desktopCapturerGetSources.js');

describe('desktopCapturerGetSources', () => {
  test('Returns undefined', () => {
    expect(desktopCapturerGetSources())
      .toEqual(undefined);
  });
});
