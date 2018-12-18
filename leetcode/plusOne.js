/**
 
  easy
  
  https://leetcode.com/problems/plus-one/

  Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

  The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

  You may assume the integer does not contain any leading zero, except the number 0 itself.

  Example 1:

  Input: [1,2,3]
  Output: [1,2,4]
  Explanation: The array represents the integer 123.
  Example 2:

  Input: [4,3,2,1]
  Output: [4,3,2,2]
  Explanation: The array represents the integer 4321.

*/

function plusOne(digits) {
  let carry = 1;
  for ( let i = digits.length-1; i >= 0; i-- ) {
    const sum = digits[i]+carry;
    carry = sum > 9 ? 1 : 0;
    digits[i] = sum % 10;
  }

  if (carry){
    digits.unshift(1);
  }

  return digits;
};

// console.log(plusOne([1,2,3]))

let input2 = [9];
let input3 = [9,9];
let input69 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
let input70 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9];
let input71 = [6,1,4,5,3,9,0,1,9,5,1,8,9,9,9,9,9,9,9];
let input72 = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];

// console.log(plusOne(input69));
// console.log(plusOne(input70));
// console.log(plusOne(input71));
console.log(plusOne(input3));