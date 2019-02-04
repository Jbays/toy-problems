/*

  https://leetcode.com/problems/valid-palindrome/

  125. Valid Palindrome

  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

  Note: For the purpose of this problem, we define empty string as valid palindrome.

  Example 1:
  Input: "A man, a plan, a canal: Panama"
  Output: true
  
  Example 2:
  Input: "race a car"
  Output: false

*/

let input1 = "A man, a plan, a canal: Panama";
let input2 = "race a car"
let input3 = "1234321"
let input4 = "1234311"

//Runtime: 104 ms, faster than 32.55% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 20.7 MB, less than 18.56 % of JavaScript online submissions for Valid Palindrome.

//O(n) time complexity
// function isPalindrome(string){
//   let strip = string.replace(/\W/g,'').split('').map((letter)=>{
//     return letter.toLowerCase();
//   }).join('');

//   for ( let i = 0; i < strip.length; i++ ) {
//     let firstChar = strip[i];
//     let lastChar = strip[strip.length-1-i];

//     if ( firstChar !== lastChar ) {
//       return false;
//     }
//   }

//   return true;
// }

function isPalindrome(string){
  let left = 0;
  let right = string.length-1;

  while ( left < right ) {
    
  }
  
  // string = string.split(' ').join('');
  // console.log(string);
  // for ( let i = 0; i < string.length; i++ ) {
  //   let firstChar = string[i];
  //   let lastChar = string[string.length-1-i];

  //   //numbers 0 thru 9
  //   if ( firstChar.charCodeAt(0) > 47 && firstChar.charCodeAt(0) < 58 ) {
  //     if ( firstChar !== lastChar ) {
  //       return false;
  //     }
  //   } else 
  //   //if lowercase letter or uppercase letter
  //   if ( (firstChar.charCodeAt(0) > 64 && firstChar.charCodeAt(0) < 91) || 
  //        (firstChar.charCodeAt(0) > 96 && firstChar.charCodeAt(0) < 123 ) ) {
  //     console.log(firstChar)
  //     console.log(lastChar)
  //         if ( firstChar.toLowerCase() !== lastChar.toLowerCase() ){
  //       return false;
  //     }
  //   } 
  // }
  // return true;
}

console.log(isPalindrome(input1))
// console.log(isPalindrome(input2))
// console.log(isPalindrome(input3))
// console.log(isPalindrome(input4))