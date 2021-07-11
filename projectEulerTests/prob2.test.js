const EvenFibonacciNumbers = require('../projectEuler/prob2.js');

test('EvenFibonacciNumbers. 1 thru <10 should equal 44', () => {
  expect(EvenFibonacciNumbers(10)).toBe(44);
});
test('1 thru <20 should equal 3382', () => {
  expect(EvenFibonacciNumbers(20)).toBe(3382);
});
test('1 thru <30 should equal 257114', () => {
  expect(EvenFibonacciNumbers(30)).toBe(257114);
});
test('1 thru <33 should equal 1089154', () => {
  expect(EvenFibonacciNumbers(33)).toBe(1089154);
});
test('1 thru <34 should equal 4613732', () => {
  expect(EvenFibonacciNumbers(34)).toBe(4613732);
});