const getGPUFeatureStatus = require('@/src/api/getGPUFeatureStatus.js');

describe('getGPUFeatureStatus', () => {
  test('Returns undefined', () => {
    expect(getGPUFeatureStatus())
      .toEqual(undefined);
  });
});
