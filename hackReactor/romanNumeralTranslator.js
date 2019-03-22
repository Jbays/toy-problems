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

// function translateRomanNumeral(romanNumeral){
//   let output = 0;
//   if (romanNumeral === '') { return output };
//   if ( romanNumeral && !DIGIT_VALUES[romanNumeral[0]] ) {
//     return null
//   }

//   let mapped = romanNumeral.split('').map((char)=>{
//       return DIGIT_VALUES[char];
//     })

//   for ( let i = 0; i < mapped.length; i++ ) {
//     let prev = mapped[i-1];
//     let curr = mapped[i];
//     let next = mapped[i+1];

//     if ( curr < prev && curr < next || !prev && curr < next ) {
//       output -= curr;
//     } else {
//       output += curr;
//     }
//   }

//   return output;
    
//     // .reduce((acc,curr,index,srcArr)=>{
//     //   console.log('acc',acc)
//     //   console.log('curr',curr)
//     //   if ( srcArr[index] < srcArr[index+1] ) {
//     //     return acc-curr;
//     //   }
//     //   return acc+curr;
//     // })

// }

function translateRomanNumeral(romanNumeral){
  if (romanNumeral === '') { return 0 };

  return romanNumeral.split('').map((char)=>{
    return DIGIT_VALUES[char];
  }).reduce((acc,curr,index,srcArr)=>{
    if ( curr < srcArr[index-1] && curr < srcArr[index+1] || !srcArr[index-1] && curr < srcArr[index+1] ){
      return acc-curr;
    } 
    return acc+curr;
  },0) || 'null';
}

// console.log(translateRomanNumeral('LX'));
// console.log(translateRomanNumeral('MCM'));
// console.log(translateRomanNumeral('XV'));
// console.log(translateRomanNumeral('MCMX'));
// console.log(translateRomanNumeral('X'));
// console.log(translateRomanNumeral('MCMLIV'));

// console.log(translateRomanNumeral('VI'));
// console.log(translateRomanNumeral('MCMXC'));
// console.log(translateRomanNumeral('MDCCCCX'));
// console.log(translateRomanNumeral('XIV'));
// console.log(translateRomanNumeral('M'));
// console.log(translateRomanNumeral('MMVIII'));
// console.log(translateRomanNumeral('II'));
// console.log(translateRomanNumeral('VII'));
console.log(translateRomanNumeral('IV'));
// console.log(translateRomanNumeral('horse'));
// console.log(translateRomanNumeral(''));
// console.log(translateRomanNumeral('MMMXC'));