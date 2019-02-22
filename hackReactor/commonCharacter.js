/*

  Common Characters
  Write a function that accepts two strings as arguments, 
    and returns only the characters that are common to both strings.

  Your function should return the common characters in the same order that they appear in the first argument. 
  
  Do not return duplicate characters and ignore whitespace in your returned string.

  Example: commonCharacters('acexivou', 'aegihobu')

  Returns: 'aeiou'

*/

//time complexity: worst case: O(n*m) where n and m are the input string lengths respectively
//                 best case : O(c) where c is the total number of unique characters in common 
function commonCharacters(str1,str2){
  let output = '';
  let record = {};
  for ( let i = 0; i < str1.length; i++ ) {
    if ( !record[str1[i]] && str1[i] !== ' ' ){
      if ( str2.includes(str1[i]) ) {
        output += str1[i];
      }
      record[str1[i]] = true;
    } 

  }
  return output;
}

console.log(commonCharacters('acexivou','aegihobu'));