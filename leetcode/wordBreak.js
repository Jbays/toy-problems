/**
  medium
 
  https://leetcode.com/problems/word-break/
 
  Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
  determine if s can be segmented into a space-separated sequence of one or more dictionary words.

  Note: The same word in the dictionary may be reused multiple times in the segmentation.
  You may assume the dictionary does not contain duplicate words.
  
  Example 1:

  Input: s = "leetcode", wordDict = ["leet", "code"]
  Output: true
  Explanation: Return true because "leetcode" can be segmented as "leet code".
  
  Example 2:

  Input: s = "applepenapple", wordDict = ["apple", "pen"]
  Output: true
  Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
              Note that you are allowed to reuse a dictionary word.
  
  Example 3:

  Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
  Output: false

 */

let str1 = 'leetcode';
let str2 = 'applepenapple';
let str3 = 'catsandogs'
let str4 = 'bb'

let dict1 = ['leet','code'];
let dict2 = ['apple','pen'];
let dict3 = ['cats','dog','sand','and','cat'];
let dict4 = ["a","b","bbb","bbbb"];

function wordBreak(string,dictionary){
  if ( dictionary.length === 0 ) { return false };
  if ( dictionary.length === 1 ) { return string === dictionary[0] };

  for ( let i = 0; i < dictionary.length; i++ ) {
    if ( string.includes(dictionary[i]) ){
      string = string.substring(dictionary[i].length);
    } else {
      return false;
    }
  }

  return true;
}

// console.log(wordBreak(str1,dict1));
// console.log(wordBreak(str2,dict2));
// console.log(wordBreak(str3,dict3));
console.log(wordBreak(str4,dict4));