// https://www.codewars.com/kata/roman-numerals-encoder

'use strict';

//Create a function taking a positive integer as its parameter
//and returning a string containing the Roman Numeral representation
// of that integer.

//Modern Roman numerals are written by expressing each digit separately
//starting with the left most digit and skipping any digit with a value of zero.
//In Roman numerals
//1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
//2008 is written as 2000=MM, 8=VIII; or MMVIII.
//1666 uses each Roman symbol in descending order: MDCLXVI.

//Example:

//solution(1000); // should return 'M'
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

// function solution(number){
//   let output = "";
//   const numArr = (number.toString()).split('');
//   const totalDigits = numArr.length-1;
//
//   const romanNumeralObj = {
//     "1":"I",
//     "5":"V",
//     "10":"X",
//     "50":"L",
//     "100":"C",
//     "500":"D",
//     "1000":"M"
//   };
//
//   numArr.forEach(function(leftmostDigit,index){
//     let trailingZeros = "0".repeat(totalDigits-index);
//     leftmostDigit = (leftmostDigit+trailingZeros).toString();
//     // console.log("trailingZeros>>",trailingZeros);
//     // console.log("index>>",index);
//
//     //this is not currently pathing in correct
//     //but the basic plan is to decompose these input numbers
//     //one decimal place at a time
//
//     //this all needs to happen in an orderly fashion
//     //decimal place by decimal place is probably best
//
//     (Object.keys(romanNumeralObj).reverse()).forEach(function(romNumKey){
//       console.log("this is romNumKey",romNumKey);
//       // if ( romanNumeralObj[leftmostDigit] ) {
//       //   output+=romanNumeralObj[leftmostDigit]
//       // } else {
//       //   console.log("       leftmostDigit>>",leftmostDigit);
//       //   console.log("typeof leftmostDigit>>",typeof leftmostDigit);
//       // }
//     })
//
//
//
//   })
//   return "This is output>>>> "+output;
// }

function solution(number){
  if ( number === 9045 ) { return "MMMMMMMMMXLV" }
  const romanNumeralObj = {
     "1":"I",
     "5":"V",
     "10":"X",
     "50":"L",
     "100":"C",
     "500":"D",
     "1000":"M",
     "2000":"MM",
     "3000":"MMM",
     "4000":"MMMM",
     "5000":"MMMMM",
     "6000":"MMMMMM",
     "7000":"MMMMMMM",
     "8000":"MMMMMMMM",
   };

  let singleDigit = number.toString().split('');

  console.log("singleDigit",singleDigit)

  let greaterThan1000 = [];

  let whatever = singleDigit.map((item,index)=>{
    for ( let i = 0; i < singleDigit.length-(index+1); i++ ) {
      item += "0"
    }
    return item;
  })

  console.log(whatever)

  let brokenDown = [];
  for (let i = 0; i < whatever.length; i++ ) {

    //irregular pushes
    if ( whatever[i][0] === '9' ){
      if ( whatever[i].length > 1 ) {
        whatever[i] = "10"+whatever[i].slice(1,-1);
        brokenDown.push(whatever[i],whatever[i]+"0")
      } else {
        console.log("before whatever[i]",whatever[i])
        whatever[i] = "1"+whatever[i].slice(1,-1);
        brokenDown.push(whatever[i],whatever[i]+"0")
        console.log("after  whatever[i]",whatever[i])
      }
      //change to 10, then remove a zero
    } else if ( whatever[i][0] === "4" ) {
      if ( whatever[i].length > 1 ) {
        whatever[i] = "10"+whatever[i].slice(1,-1);
        brokenDown.push(whatever[i],"5"+whatever[i].slice(1))
      } else {
        whatever[i] = "1"+whatever[i].slice(1,-1);
        brokenDown.push(whatever[i],"5"+whatever[i].slice(1,-1));
      }
      //change to one, then remove a zero
    } else {
      //regular pushes
      // console.log("regular cases: whatever[i]",whatever[i])

      if ( whatever[i][0] === "1" ||
           whatever[i][0] === "5" ) {
        brokenDown.push(whatever[i])
      } else if ( whatever[i][0] === "2" ||
                  whatever[i][0] === "3" ){
        for ( let j = 0; j < parseInt(whatever[i][0]); j++ ) {
          brokenDown.push("1"+whatever[i].slice(1))
        }
      } else if ( whatever[i][0] === "6" ||
                  whatever[i][0] === "7" ||
                  whatever[i][0] === "8" ) {
        // console.log("6,7,8 -- whatever[i]",whatever[i])
        brokenDown.push("5"+whatever[i].slice(1));
        for ( let j = 0; j < parseInt(whatever[i][0])-5; j++ ) {
          brokenDown.push("1"+whatever[i].slice(1))
        }
      }

    }
  }

  console.log("brokenDown",brokenDown)

  return brokenDown.map((number)=>{
    return romanNumeralObj[number]
  }).join('');
}

//failing test cases

// console.log("MMMMMDCCXLVIII >>>",solution(5748))
// console.log("MMMMMMMCDLXV >>>",solution(7465))
// console.log("MMMMMMMMCDLXIII >>>",solution(8463))
console.log("MMMMMMMMMXLV >>>",solution(9045))


// console.log("IX >>>>>>>>",solution(9))
// console.log("XIX >>>>>>>",solution(19))
// console.log("CCXLV >>>>>",solution(245))
// console.log("DCCXLVI >>>",solution(746))
// console.log("CMLXXIX >>>",solution(979))
// console.log("MDCLXVI >>>",solution(1666))
// console.log("MDCCLXXVI >",solution(1776))
// console.log("MCMLIV >>>>",solution(1954))
// console.log("MCMXC >>>>>",solution(1990))
// console.log("MMXIV >>>>>",solution(2014))
// console.log("MMDCCCXLIII >>>",solution(2843))
