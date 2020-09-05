const showAboutPanel = require('@/src/api/showAboutPanel.js');

describe('showAboutPanel', () => {
  test('Returns undefined', () => {
    expect(showAboutPanel())
      .toEqual(undefined);
  });
});
