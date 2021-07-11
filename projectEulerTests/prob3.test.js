const LargestPrimeFactor = require('../projectEuler/prob3.js');

test('Prime factors of 8 is 2', () => {
  expect(LargestPrimeFactor(8)).toEqual(expect.arrayContaining([2]));
});
test('Prime factors of 16 is 2', () => {
  expect(LargestPrimeFactor(16)).toEqual(expect.arrayContaining([2]));
});
test('Prime factors of 1000 are [2,5]', () => {
  expect(LargestPrimeFactor(1000)).toMatchObject([2,5])
});
test('Prime factors of 13195 are 2, 5, 7, 13, and 29', () => {
  expect(LargestPrimeFactor(13195)).toMatchObject([2,5,7,13,29]);
});
test('Prime factors of 600851475143 are 2,71,839,1471,6857', () => {
  expect(LargestPrimeFactor(600851475143)).toMatchObject([2,71,839,1471,6857]);
});
