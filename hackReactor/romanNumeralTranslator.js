/*

  Roman Numeral Translator
    Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

    In a roman numeral, each character adds its value to the total. 
    VI = 6 (5 + 1 = 6)
    LXX = 70 (50 + 10 + 10 = 70)
    MCC = 1200 (1000 + 100 + 100 = 1200)

    When a smaller numeral appears before a larger one, it becomes a subtractive operation. 
    You can assume only one smaller numeral may appear in front of larger one.
    IV = 4 (5 – 1 = 4)
    XC = 90 (100 – 10 = 90)
    CM = 900 (1000 – 100 = 900)

    You should return “null” on invalid input.

  EXAMPLES:
    Input	
      romanNumeral:"LX"	
    Output
      60
    
    Input	
      romanNumeral:"IV"	
    Output
      4
    
    Input	
      romanNumeral:"horse"	
    Output
      "null"
    
    Input	
      romanNumeral:""
    Output
      0
*/

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral(romanNumeral){
  if ( romanNumeral === '' ) { return 0 };
  if ( romanNumeral && !DIGIT_VALUES[romanNumeral[0]] ) {
    return null
  }

  console.log('romanNumeral.split("")',romanNumeral.split(''))

  let mapped = romanNumeral.split('').map((char)=>{
    return DIGIT_VALUES[char];
  }).reduce((acc,curr,index,srcArr)=>{
    console.log('acc',acc)
    console.log('curr',curr)
    if ( srcArr[index] < srcArr[index+1] ) {
      return acc-curr;
    }
    return acc+curr;
  })

  return mapped;

  console.log('this is mapped',mapped);

  // romanNumeral.split('')

  // let mapped = romanNumeral.map((character)=>{

  // })

}

// console.log(translateRomanNumeral('LX'));
console.log(translateRomanNumeral('IV'));
// console.log(translateRomanNumeral('horse'));
// console.log(translateRomanNumeral(''));
// console.log(translateRomanNumeral('MMMXC'));