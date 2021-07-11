// https://projecteuler.net/problem=1
// Multiples of 3 and 5
// Show HTML problem content 
// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// const functionName

// declare value sum
// loop starting at 1 (3?) ending at 1000 (999?)
// if num is a multiple of three, add to sum
// if num is a multiple of five, add to sum
// return sum

function SumOfThreeAndFive(num){
  let sum = 0;
  for ( let i = 1; i < num; i++ ) {
    if ( i % 3 === 0 ) {
      sum = sum + i;
    } else if ( i % 5 === 0 ) {
      sum = sum + i;
    }
  }
  return sum;
}

console.log('SumOfThreeAndFive(10) should equal 23:', SumOfThreeAndFive(10));
console.log('SumOfThreeAndFive(1000) should equal 233168:', SumOfThreeAndFive(1000));