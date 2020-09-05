const disableDomainBlockingFor3DAPIs = require('@/src/api/disableDomainBlockingFor3DAPIs.js');

describe('disableDomainBlockingFor3DAPIs', () => {
  test('Returns undefined', () => {
    expect(disableDomainBlockingFor3DAPIs())
      .toEqual(undefined);
  });
});
