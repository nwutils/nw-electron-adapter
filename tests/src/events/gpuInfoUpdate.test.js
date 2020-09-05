const gpuInfoUpdate = require('@/src/events/gpuInfoUpdate.js');

describe('gpuInfoUpdate', () => {
  test('Returns undefined', () => {
    expect(gpuInfoUpdate())
      .toEqual(undefined);
  });
});
