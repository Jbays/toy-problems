const SumOfThreeAndFive = require('../projectEuler/prob1.js');

test('adds together multiples of either / both 3 && 5. 1 thru <10 should equal 23', () => {
  expect(SumOfThreeAndFive(10)).toBe(23);
});
test('1 thru <1000 should equal 233168', () => {
  expect(SumOfThreeAndFive(1000)).toBe(233168);
});