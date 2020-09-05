const applicationMenu = require('@/src/api/applicationMenu.js');

describe('applicationMenu', () => {
  test('Returns undefined', () => {
    expect(applicationMenu())
      .toEqual(undefined);
  });
});
