const secondInstance = require('@/src/events/secondInstance.js');

describe('secondInstance', () => {
  test('Returns undefined', () => {
    expect(secondInstance())
      .toEqual(undefined);
  });
});
