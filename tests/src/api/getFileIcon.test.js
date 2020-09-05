const getFileIcon = require('@/src/api/getFileIcon.js');

describe('getFileIcon', () => {
  test('Returns undefined', () => {
    expect(getFileIcon())
      .toEqual(undefined);
  });
});
