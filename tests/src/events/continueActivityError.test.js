const continueActivityError = require('@/src/events/continueActivityError.js');

describe('continueActivityError', () => {
  test('Returns undefined', () => {
    expect(continueActivityError())
      .toEqual(undefined);
  });
});
