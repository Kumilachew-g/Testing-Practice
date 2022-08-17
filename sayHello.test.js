const sayHello = require('./sayHello');
test('Say jest Message', () => {
  expect(sayHello()).toBe('Hello');
});
