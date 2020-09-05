const setAppLogsPath = require('@/src/api/setAppLogsPath.js');

describe('setAppLogsPath', () => {
  test('Returns undefined', () => {
    expect(setAppLogsPath())
      .toEqual(undefined);
  });
});
