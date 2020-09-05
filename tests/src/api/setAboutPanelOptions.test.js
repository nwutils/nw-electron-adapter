const setAboutPanelOptions = require('@/src/api/setAboutPanelOptions.js');

describe('setAboutPanelOptions', () => {
  test('Returns undefined', () => {
    expect(setAboutPanelOptions())
      .toEqual(undefined);
  });
});
