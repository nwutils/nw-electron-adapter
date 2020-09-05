const willFinishLaunching = require('@/src/events/willFinishLaunching.js');

describe('willFinishLaunching', () => {
  test('Returns undefined', () => {
    expect(willFinishLaunching())
      .toEqual(undefined);
  });
});
