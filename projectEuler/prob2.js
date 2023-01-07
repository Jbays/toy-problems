// https://projecteuler.net/problem=2
// Even Fibonacci numbers
// Problem 2
// Each new term in the Fibonacci sequence is generated by adding the previous two terms
// By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function EvenFibonacciNumbers(num){
  let sum = 0;
  
  const ALL_FIB_VALUES = [0,1];
  let lastFibValue = null;
  
  // while ( lastFibValue <= 4000000 ) {
  for ( let i = 3; i <= num; i++ ) {
    if ( lastFibValue >= 4000000 ) {
      return sum;
    } else {
      const fibValue = calculateNthFibValue(i);
      if ( fibValue % 2 === 0 ) {
        sum = sum + fibValue
      };
      lastFibValue = fibValue
    }
  }

  function calculateNthFibValue(number){
    const sumOfSlice = ALL_FIB_VALUES.slice(number-3,number-1).reduce((a,b)=>a+b);
    ALL_FIB_VALUES.push(sumOfSlice);
    return sumOfSlice;
  }
  // console.log(ALL_FIB_VALUES);

  return sum;
}


module.exports = EvenFibonacciNumbers;