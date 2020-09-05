const commandLine = require('@/src/api/commandLine.js');

describe('commandLine', () => {
  test('Returns undefined', () => {
    expect(commandLine())
      .toEqual(undefined);
  });
});
