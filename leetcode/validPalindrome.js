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

//Runtime: 104 ms, faster than 32.55% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 20.7 MB, less than 18.56 % of JavaScript online submissions for Valid Palindrome.

//O(n) time complexity
function isPalindrome(string){
  let strip = string.replace(/\W/g,'').split('').map((letter)=>{
    return letter.toLowerCase();
  }).join('');

  for ( let i = 0; i < strip.length; i++ ) {
    let firstChar = strip[i];
    let lastChar = strip[strip.length-1-i];

    if ( firstChar !== lastChar ) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome(input1))
console.log(isPalindrome(input2))