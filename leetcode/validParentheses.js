/**
  easy
 
  Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Note that an empty string is also considered valid.

  Example 1:

  Input: "()"
  Output: true
  Example 2:

  Input: "()[]{}"
  Output: true
  Example 3:

  Input: "(]"
  Output: false
  Example 4:

  Input: "([)]"
  Output: false
  Example 5:

  Input: "{[]}"
  Output: true

 */

 //time complexity is O(n) where n is the length of the string
 //space complexity is O(n) where n is the length of the string.
function isValid(string){
  let count = {
    '(':0,
    ')':0,
    '[':0,
    ']':0,
    '{':0,
    '}':0,
  };
  let allCompliments = {
    ')':'(',
    ']':'[',
    '}':'{'
  }
  let openingStack = [];
  let openChars = '([{';

  if ( string.length === 1 ) { return false };

  for ( let i = 0; i < string.length; i++ ) {
    count[string[i]]++;

    if ( openChars.includes(string[i]) ){
      openingStack.push(string[i]);
    } else {
      let compliment = allCompliments[string[i]];
      let lastIn = openingStack.pop();
      
      if ( compliment !== lastIn ) {
        return false;
      }
    }
  }

  if ( count['('] !== count[')'] || count['['] !== count[']'] || count['{'] !== count['}'] ){
    return false;
  }

  return true;
}


// function isValid(string){
//   let count = {
//     '(':0,
//     ')':0,
//     '[':0,
//     ']':0,
//     '{':0,
//     '}':0,
//   };
//   let openingStack = [];
//   for ( let i = 0; i < string.length; i++ ) {
//     count[string[i]]++;
//     if ( string[i-1] === '(' && (string[i] === ']' || string[i] === '}') )  {
//       return false;
//     }
//     if ( string[i-1] === '[' && (string[i] === ')' || string[i] === '}') )  {
//       return false;
//     }
//     if ( string[i-1] === '{' && (string[i] === ']' || string[i] === ')') )  {
//       return false;
//     }
//   }
//   if ( count[')'] > count['('] || 
//         count[']'] > count['['] || 
//         count['}'] > count['{'] ) {
//     return false;
//   }
//   if ( count['('] !== count[')'] || 
//        count['['] !== count[']'] || 
//        count['{'] !== count['}'] ){
//     return false;
//   }
//   return true;
// }

 console.log(isValid('()'))
 console.log(isValid('()[]{}'))
 console.log(isValid('(]'))
 console.log(isValid('([)]'))
 console.log(isValid('{[]}'))
 console.log(isValid('{[}]'))
 console.log(isValid('[([]])'))