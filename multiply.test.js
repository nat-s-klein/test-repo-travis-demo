const multiply = require('./multiply');

test('adds 2 times 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});