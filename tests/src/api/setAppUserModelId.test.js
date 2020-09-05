const setAppUserModelId = require('@/src/api/setAppUserModelId.js');

describe('setAppUserModelId', () => {
  test('Returns undefined', () => {
    expect(setAppUserModelId())
      .toEqual(undefined);
  });
});
