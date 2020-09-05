const ready = require('@/src/events/ready.js');

describe('ready', () => {
  test('Returns undefined', () => {
    expect(ready())
      .toEqual(undefined);
  });
});
