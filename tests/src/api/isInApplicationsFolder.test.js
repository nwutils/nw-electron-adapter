const isInApplicationsFolder = require('@/src/api/isInApplicationsFolder.js');

describe('isInApplicationsFolder', () => {
  test('Returns undefined', () => {
    expect(isInApplicationsFolder())
      .toEqual(undefined);
  });
});
