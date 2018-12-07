/**
  medium

  https://leetcode.com/problems/letter-combinations-of-a-phone-number/

  17. Letter Combinations of a Phone Number

  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

  A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

  Input: "23"
  Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

function letterCombinations(digits){
  let letterNumMap = {
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz',
  }

  let output = [];

  if ( digits.length === 1 ){
    return letterNumMap[digits].split('');
  }

  for ( let i = 0; i < digits.length; i++ ) {
    output = makePerms(output,letterNumMap[digits[i]])
  }

  function makePerms(outputArr,letters){
    if ( outputArr.length === 0 ) { return letters.split('') };
    
    let tempArr = []

    for ( let i = 0; i < letters.length; i++ ) {
      let firstSecondMap = outputArr.map((singleLetter)=>{
        return singleLetter+letters[i];
      })
      tempArr.push(...firstSecondMap);
    }
    return tempArr;
  }

  return output;
}

console.log(letterCombinations('234'))
// console.log(letterCombinations('23'))
// console.log(letterCombinations('2'))