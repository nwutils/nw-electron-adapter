const newWindowForTab = require('@/src/events/newWindowForTab.js');

describe('newWindowForTab', () => {
  test('Returns undefined', () => {
    expect(newWindowForTab())
      .toEqual(undefined);
  });
});
