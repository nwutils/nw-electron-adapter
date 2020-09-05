const importCertificate = require('@/src/api/importCertificate.js');

describe('importCertificate', () => {
  test('Returns undefined', () => {
    expect(importCertificate())
      .toEqual(undefined);
  });
});
