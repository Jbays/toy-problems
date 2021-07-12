const LargestPalindromeProduct = require('../projectEuler/prob4.js');

test('the largest palindromic number made from the product of two 2-digit numbers is 9009', () => {
  expect(LargestPalindromeProduct(2)).toEqual(9009);
});
test('from the product of two 3-digit numbers is 906609', () => {
  expect(LargestPalindromeProduct(3)).toEqual(906609);
});