/**
  easy

  https://leetcode.com/problems/first-unique-character-in-a-string/

 Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

  Examples:

  s = "leetcode"
  return 0.

  s = "loveleetcode",
  return 2.
  Note: You may assume the string contain only lowercase letters.

 */

function firstUniqChar(string){
  let record = {};
  let answer = null;

  for ( let i = 0; i < string.length; i++ ) {
    if ( !record[string[i]] ) {
      record[string[i]] = {
        count: 1,
        index: i
      };
    } else {
      record[string[i]].count++;
    }
  }
  
  for ( let character in record ) {
    if ( record[character].count === 1 ) {
      if ( answer === null ) {
        answer = record[character].index;
      } else if ( answer > record[character].index ) {
        answer = record[character].index;
      }
    }

  }

  if ( answer === null ) {
    return -1;
  }

  return answer 
}

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
