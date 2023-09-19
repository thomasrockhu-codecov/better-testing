const { add, subtract, multiply, divide } = require('./calculator');

test('add function', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract function', () => {
  expect(subtract(1, 2)).toBe(-1);
});

test('multiply function', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('divide function', () => {
  expect(divide(1, 2)).toBe(0.5);
  expect(divide(1, 0)).toBe('Cannot divide by 0');
});
