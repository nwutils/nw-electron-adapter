const addRecentDocument = require('@/src/api/addRecentDocument.js');

describe('addRecentDocument', () => {
  test('Returns undefined', () => {
    expect(addRecentDocument())
      .toEqual(undefined);
  });
});
