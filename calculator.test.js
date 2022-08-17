const calculator = require('./calculator');
const x = 12;
const y = 3;
test('Add Numbers', () => {
  expect(calculator.add(12, 3)).toBe(15);
});
test('Subtract Numbers', () => {
  expect(calculator.subtract(12, 3)).toBe(9);
});
test('Multiply Numbers', () => {
  expect(calculator.multiply(12, 3)).toBe(36);
});
test('Divide Numbers', () => {
  expect(calculator.divide(12, 3)).toBe(4);
});
