const gpuProcessCrashed = require('@/src/events/gpuProcessCrashed.js');

describe('gpuProcessCrashed', () => {
  test('Returns undefined', () => {
    expect(gpuProcessCrashed())
      .toEqual(undefined);
  });
});
