const reverseString = require('./reverseString');

test('should reverse normal strings', () => {
  expect(reverseString('reverse')).toBe('esrever');
});
