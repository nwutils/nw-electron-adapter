const isEmojiPanelSupported = require('@/src/api/isEmojiPanelSupported.js');

describe('isEmojiPanelSupported', () => {
  test('Returns undefined', () => {
    expect(isEmojiPanelSupported())
      .toEqual(undefined);
  });
});
