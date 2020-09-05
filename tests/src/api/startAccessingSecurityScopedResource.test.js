const startAccessingSecurityScopedResource = require('@/src/api/startAccessingSecurityScopedResource.js');

describe('startAccessingSecurityScopedResource', () => {
  test('Returns undefined', () => {
    expect(startAccessingSecurityScopedResource())
      .toEqual(undefined);
  });
});
