const capitalizeFirstLetter = require('./capitalize');
test('Capitalize First Letter', () => {
  expect(capitalizeFirstLetter('capitalize')).toBe('CAPITALIZE');
});
