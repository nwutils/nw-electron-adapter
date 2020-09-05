const rendererProcessCrashed = require('@/src/events/rendererProcessCrashed.js');

describe('rendererProcessCrashed', () => {
  test('Returns undefined', () => {
    expect(rendererProcessCrashed())
      .toEqual(undefined);
  });
});
