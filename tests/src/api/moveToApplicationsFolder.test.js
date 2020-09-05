const moveToApplicationsFolder = require('@/src/api/moveToApplicationsFolder.js');

describe('moveToApplicationsFolder', () => {
  test('Returns undefined', () => {
    expect(moveToApplicationsFolder())
      .toEqual(undefined);
  });
});
