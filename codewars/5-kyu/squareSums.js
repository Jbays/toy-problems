// http://www.codewars.com/kata/square-sums-simple

/*
  Square sums
  Write function square_sums_row (or squareSumsRow) that, given integer number N (in range 2..43), returns array of integers 1..N arranged in a way, so sum of each 2 consecutive numbers is a square.

  Solution is valid if and only if following two criterias are met:

  Each number in range 1..N is used once and only once.
  Sum of each 2 consecutive numbers is a perfect square.
  Example
  For N=15 solution could look like this:

  [ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]

  Verification
  All numbers are used once and only once. When sorted in ascending order array looks like this:
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

  Sum of each 2 consecutive numbers is a perfect square:
    16    16     16     16     16     16     16
    /+\   /+\    /+\    /+\    /+\    /+\    /+\
  [ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]
        \+/    \+/    \+/    \+/    \+/    \+/    \+/
        9     25      9     25      9     25      9

  9 = 3*3
  16 = 4*4
  25 = 5*5
  If there is no solution, return false (or, None in scala). For example if N=5, then numbers 1,2,3,4,5 cannot be put into square sums row: 1+3=4, 4+5=9, but 2 has no pairs and cannot link [1,3] and [4,5]
*/

function square_sums_row(n) {
  const squares = [4,9,16,25,36,49,64];
  let nums = []
  let output = [];
  for ( let i = 1; i <=n; i++ ) {
    nums.push(i);
  }

  output.push(nums.pop());

  console.log('output',output);

  //make a list of numbers
  //how to calculate the sums?

  


  return false
}

console.log(square_sums_row(13));
// console.log(square_sums_row(23));
// console.log(square_sums_row(25));