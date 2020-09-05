const showEmojiPanel = require('@/src/api/showEmojiPanel.js');

describe('showEmojiPanel', () => {
  test('Returns undefined', () => {
    expect(showEmojiPanel())
      .toEqual(undefined);
  });
});
