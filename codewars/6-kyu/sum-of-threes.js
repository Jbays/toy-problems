// https://www.codewars.com/kata/simple-fun-number-290-sum-of-threes

// ask
// Given a number n, return a string representing it as a sum of distinct powers of three,
//or return "Impossible" if that's not possible to achieve.
//
// Input/Output
// [input] integer n
//
// A positive integer n.
//
// 1 ≤ n ≤ 10^16.
//
// [output] a string
//
// A string representing the sum of powers of three which adds up to n,
//or "Impossible" if there is no solution. If the solution does exist,
//it should be return as "3^a1+3^a2+ ... +3^an",
//where ai for 0 ≤ i ≤ n represents the corresponding exponent of the term.
//The terms in the string should also be sorted in descending order,
//meaning that higher powers should appear before the lower ones in the string
//("3^0+3^1" is incorrect, whereas "3^1+3^0" is correct).
//
// Example
// For n = 4, the output should be "3^1+3^0".
//
// 4 can be represented as 3+1 which is in fact 3 to the power of 1 plus 3 to the power of 0
//
// For n = 2, the output should be "Impossible".
//
// There is no way to represent 2 as a sum of distinct powers of 3.

function sumOfThrees(n) {
  console.log("this is input>>",n);
  //calculate the highest value of 3^n that is still less than n
  // console.log("n/3",n/3)

  // let multiples = [1,3,9,27,81,]

  let output = [];
  let remainder = n;
  let stopPoint = Math.ceil(Math.log(n)/Math.log(3))+1;
  console.log("stopPoint",stopPoint)

  //[0,1] --> n
  //[1,3] --> individual sums
  // for ( let i = 0; i < stopPoint; i++ ) {
  //   remainder = remainder - (3**i);
  //   console.log("remainder",remainder)
  //   output.push(Math.pow(3,i))
  // }

  let i = 0;
  while ( remainder > 0 ) {
    remainder = remainder - (3**i);
    i++;
    output.push(3**i);

    if ( remainder === 2 ) {
      return "Impossible";
    }
  }


  console.log("output.reverse()>>",output.reverse())

  //r


  //output array (putting the exponents)
  //recursively subtract the highest possible sum
  //feed remainder back into recursive function (until remainder is gone)
  //  OR IF REMAINDER STAYS (return "IMPOSSIBLE")
  //


  // for ( let i = 0; i < ; i++ ) {
  //
  // }

  //1,3,9,27,81,243,729


}

// console.log(sumOfThrees(2),"Impossible"))
// console.log(sumOfThrees(4),"3^1+3^0")
// console.log(sumOfThrees(84),"3^4+3^1")
// console.log(sumOfThrees(243),"3^5","243 = 3^5. Are you missing something? ;-)")
console.log(sumOfThrees(87754),"3^10+3^9+3^8+3^7+3^5+3^3+3^1+3^0")
// console.log(sumOfThrees(531441),"3^12"))
// console.log(sumOfThrees(1418194818),"Impossible"))
// console.log(sumOfThrees(5559060566575209),"3^33+3^9+3^1"))
// console.log(sumOfThrees(8312964441463288),"Impossible"))
