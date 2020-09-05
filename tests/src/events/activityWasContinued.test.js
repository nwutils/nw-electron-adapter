const activityWasContinued = require('@/src/events/activityWasContinued.js');

describe('activityWasContinued', () => {
  test('Returns undefined', () => {
    expect(activityWasContinued())
      .toEqual(undefined);
  });
});
