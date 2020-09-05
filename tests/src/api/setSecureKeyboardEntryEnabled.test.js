const setSecureKeyboardEntryEnabled = require('@/src/api/setSecureKeyboardEntryEnabled.js');

describe('setSecureKeyboardEntryEnabled', () => {
  test('Returns undefined', () => {
    expect(setSecureKeyboardEntryEnabled())
      .toEqual(undefined);
  });
});
