const certificateError = require('@/src/events/certificateError.js');

describe('certificateError', () => {
  test('Returns undefined', () => {
    expect(certificateError())
      .toEqual(undefined);
  });
});
