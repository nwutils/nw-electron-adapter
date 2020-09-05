const selectClientCertificate = require('@/src/events/selectClientCertificate.js');

describe('selectClientCertificate', () => {
  test('Returns undefined', () => {
    expect(selectClientCertificate())
      .toEqual(undefined);
  });
});
