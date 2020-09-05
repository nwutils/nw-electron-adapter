const getGPUInfo = require('@/src/api/getGPUInfo.js');

describe('getGPUInfo', () => {
  test('Returns undefined', () => {
    expect(getGPUInfo())
      .toEqual(undefined);
  });
});
