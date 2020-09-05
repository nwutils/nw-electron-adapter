const updateActivityState = require('@/src/events/updateActivityState.js');

describe('updateActivityState', () => {
  test('Returns undefined', () => {
    expect(updateActivityState())
      .toEqual(undefined);
  });
});
