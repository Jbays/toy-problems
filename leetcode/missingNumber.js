/*

  https://leetcode.com/problems/missing-number/

  268. Missing Number

  Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

  Example 1:
  Input: [3,0,1]
  Output: 2

  Example 2:
  Input: [9,6,4,2,3,5,7,0,1]
  Output: 8
  Note:
  Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

*/

let input1 = [3, 0, 1];
let input2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
let input3 = [0];
let input4 = [0,1];

// Runtime: 444 ms, faster than 2.16 % of JavaScript online submissions for Missing Number.
// Memory Usage: 17.5 MB, less than 18.06 % of JavaScript online submissions for Missing Number.

// time complexity - O(n^2);
// function missingNumber(array){
//   let max = Math.max(...array);

//   for ( var i = 0; i < array.length; i++ ) {
//     if ( !array.includes(i) ) {
//       return i;
//     }
//   }

//   return i
// }


//since we're talking about a fixed set and looking for a given number
//where fixed set is range 0 thru n.
//therefore the diff

function missingNumber(array){
  let actualSum = array.reduce((a,b)=>{return a+b});
  let expectedSum = ((array.length+1)*array.length)/2;

  return expectedSum - actualSum;
}

console.log(missingNumber(input1))
console.log(missingNumber(input2))
// console.log(missingNumber(input3))
// console.log(missingNumber(input4))