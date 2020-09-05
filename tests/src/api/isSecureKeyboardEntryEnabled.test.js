const isSecureKeyboardEntryEnabled = require('@/src/api/isSecureKeyboardEntryEnabled.js');

describe('isSecureKeyboardEntryEnabled', () => {
  test('Returns undefined', () => {
    expect(isSecureKeyboardEntryEnabled())
      .toEqual(undefined);
  });
});
