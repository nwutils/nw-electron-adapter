const clearRecentDocuments = require('@/src/api/clearRecentDocuments.js');

describe('clearRecentDocuments', () => {
  test('Returns undefined', () => {
    expect(clearRecentDocuments())
      .toEqual(undefined);
  });
});
