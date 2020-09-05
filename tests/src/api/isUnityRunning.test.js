const isUnityRunning = require('@/src/api/isUnityRunning.js');

describe('isUnityRunning', () => {
  test('Returns undefined', () => {
    expect(isUnityRunning())
      .toEqual(undefined);
  });
});
