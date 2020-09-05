const getAppMetrics = require('@/src/api/getAppMetrics.js');

describe('getAppMetrics', () => {
  test('Returns undefined', () => {
    expect(getAppMetrics())
      .toEqual(undefined);
  });
});
