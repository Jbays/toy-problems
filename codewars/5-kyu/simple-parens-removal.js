// https://www.codewars.com/kata/simple-parenthesis-removal/train/javascript

// In this Kata, you will be given a mathematical string and your task will be to remove all braces as follows:
//
// solve("x-(y+z)") = "x-y-z"
// solve("x-(y-z)") = "x-y+z"
// solve("u-(v-w-(x+y))-z") = "u-v+w+x+y-z"
// solve("x-(-y-z)") = "x+y+z"
// There are no spaces in the expression. Only two operators are given: "+" or "-".

//Marc's solution
// function solve(input) {
//   true => '+', false => '-'
//   let str = '';
//   let ops = [true];
//   let lastop = true;
//   let outop = true;
//   let first = true;
//   let char;
//
//   while (input.length > 0) {
//     char = input.slice(0, 1);
//     input = input.slice(1);
//
//     console.log("this is str>>>",str);
//
//     if (char.match(/[a-z]/)) {
//       const sign = ops.reduce((a, c) => {
//         return a ? c : !c;
//       }, true);
//       console.log("sign",sign);
//       if (first) {
//         str += (sign ? '' : '-') + char;
//         first = false;
//       } else {
//         if (!sign) {
//           str += (outop ? '+' : '-') + char;
//         }
//         else {
//           str += (outop ? '-' : '+') + char;
//         }
//       }
//     } else if (char === '+') {
//       outop = ops[ops.length - 1];
//       lastop = true;
//     } else if (char === '-') {
//       outop = !ops[ops.length - 1];
//       lastop = false;
//     } else if (char === '(') {
//       ops.push(lastop);
//       outop = lastop;
//       lastop = true;
//     } else if (char === ')') {
//       ops.pop();
//     }
//
//
//     // console.log(`Char: ${char}, Last: ${lastop}, Out: ${outop}, Ops: ${ops}, Str: ${str}`);
//   }
//
//   return str;
// }

//Zubair's solution
// const solve = (statement) => {
//   let ghettoStack = "";
//   let opp = {
//     "-":"+",
//     "+":"-",
//     "(": " ",
//     ")": " "
//   }
//   let newStatement = ""
//   let oppositeMode = false;
//
//   for (letter of statement) {
//     ghettoStack+=letter;
//     let lastLetter = ghettoStack.length - 1;
//     let secondLastLetter = ghettoStack.length - 2;
//
//     if ( (ghettoStack[secondLastLetter]+ghettoStack[lastLetter]) === "-(" ) {
//       oppositeMode = !oppositeMode;
//     } else if ( ghettoStack[lastLetter] === ")" ) {
//       oppositeMode = false
//     }
//     if (oppositeMode) {
//       let nextLetter = opp[letter] || letter;
//       newStatement += nextLetter;
//     } else {
//       newStatement += letter;
//     }
//   }
//   return newStatement
// }

// function solve(string){
//   let staging = "";
//   let mappedString = "";
//
//   //this adds the extra pluses
//   for ( let i = 0; i < string.length; i++ ) {
//     if ( string[i].match(/[a-z]/) ){
//       if ( string[i-1] === "(" ){
//         mappedString += "+"+string[i];
//       } else {
//         mappedString += string[i];
//       }
//     } else {
//       mappedString += string[i];
//     }
//   }
//   // console.log("mappedString>>",mappedString);
//
//   let flipSigns = false;
//   function flipThoseSigns(operator){
//     return (operator === "+") ? "-" : "+";
//   }
//
//   mappedString.split('').forEach((item,index)=>{
//     console.log(item);
//     let lastChar = string[index-1];
//     let nextChar = string[index+1];
//
//     if ( index === 0 || item.match(/[a-z]/) ){
//       staging += item;
//     } else if ( item === "+" ){
//       staging += item;
//     } else if ( item === "-" ) {
//
//       if ( nextChar === "(" ){
//
//
//         // console.log("distribute the negative");
//         // let remainder = string.slice(index+2);
//         // console.log('this is the remainder',remainder)
//         //
//         // let stop = (remainder.indexOf('(') !== -1 ) ? remainder.indexOf('(') : remainder.indexOf(')');
//         // console.log('stop',stop)
//         // for ( let i = index-1; i < stop; i++ ) {
//         //   console.log("remainder[i]",remainder[i])
//         //   if ( remainder[i] === "+" ) {
//         //     staging += item;
//         //   } else if ( remainder[i] === "-" ) {
//         //     mappedString[index]
//         //   }
//         // }
//       }
//       staging += item;
//     }
//
//
//   })

  // return staging;


  // let val = string.split('').reduce((a,b)=>{
  //   if ( a.match(/[a-z]/) && b.match(/[a-z]/) ){
  //     return a+b
  //   } else {
  //     return a
  //   }
  // }).length
  //
  // val = (string[0] === "-") ? 2*val : (2*val)-1;
  //
  // console.log("this is val",val);
  //
  // let snippet = string.indexOf("(");
  // let start = 0;

  // while ( staging.length < val ) {
  //   let lastChar    = string[staging.length-1]
  //   let currentChar = string[staging.length];
  //   let nextChar    = string[staging.length+1]
  //
  //   console.log("currentChar",currentChar)
  //   console.log("staging",staging);
  //
  //   if ( !lastChar || currentChar.match(/[a-z]/) ){
  //     staging += currentChar;
  //   } else if ( currentChar === "+" ) {
  //     staging += currentChar;
  //   } else if ( currentChar === "(" ){
  //
  //   } else if ( currentChar === "-" ) {
  //
  //     if ( nextChar === "(" ){
  //       console.log("annoying case!")
  //     }
  //     staging += currentChar;
  //   } else {
  //     staging += "1"
  //   }
  // }


  //
  // console.log("mappedString",mappedString);
  //
  // for ( let i = 0; i < mappedString.length; i++ ) {
  //   if ( mappedString[i].match(/[a-z]/) ){
  //     staging += mappedString[i];
  //   } else {
  //
  //   }
  // }
  //
  // return staging;

  //parse in chunks
  // let firstParen = string.indexOf("(")
  //
  // firstParen = (firstParen > 0 ) ? firstParen : string.length;
  //
  // function parseInChunks(stringSlice){
  //   console.log("this is stringSlice",stringSlice);
  //   for ( let i = 0; i < stringSlice.length; i++ ){
  //     // console.log("stringSlice[i]",stringSlice[i])
  //
  //     if ( stringSlice[i].match(/[a-z]/) ){
  //       staging += stringSlice[i];
  //     } else {
  //       if ( stringSlice[i] === "+" ) {
  //         staging+= stringSlice[i];
  //       } else if ( stringSlice[i] === "(" ){
  //
  //       } else if ( stringSlice[i] === ")" ){
  //
  //       } else if ( stringSlice[i] === "-" ){
  //         console.log("stringSlice[i]",stringSlice[i])
  //       }
  //     }
  //   }
  // }

  // parseInChunks(string.slice(0,firstParen))

  // return staging;
// }

//working
// console.log("a+(-b):",solve("a+(-b)")==="a-b");

function solve(string){
  let output = "";

  let ready = string.split('(');

  // ready.

  console.log("ready",ready)


  return output;
}

// console.log(solve("a-(b)"),"a-b");
// console.log(solve("a-(-b)"),"a+b");
// console.log(solve("x-(-y-z)"),"x+y+z");
// console.log(solve("(((((((((-((-(((n))))))))))))))"),"n");
// console.log(solve("a+(b)"),"a+b");
// console.log(solve("-(x-y)"),"-x+y");
// console.log(solve("x-(y+z)"),"x-y-z");
// console.log(solve("x-(y-z)"),"x-y+z");

//not working
// console.log(solve("-x"),"-x");
console.log(solve("u-(v-w+(x+y))-z"),"u-v+w-x-y-z");
// console.log(solve("x-(s-(y-z))-(a+b)"),"x-s+y-z-a-b");

//untested
// (solve("(((a-((((-(-(f)))))))))"),"a-f");
// (solve("((((-(-(-(-(m-g))))))))"),"m-g");
// (solve("(((((((m-(-(((((t)))))))))))))"),"m+t");
// (solve("-(-(x))"),"x");
// (solve("-((-x))"),"x");
// (solve("-(-(-x))"),"-x");
// (solve("-(-(x-y))"),"x-y");
// (solve("x-(-((-((((-((-(-(-y)))))))))))"),"x-y");
// (solve("u+(g+v)+(r+t)"),"u+g+v+r+t");
// (solve("q+(s-(x-o))-(t-(w-a))"),"q+s-x+o-t+w-a");
// (solve("u-(v-w-(x+y))-z"),"u-v+w+x+y-z");
// (solve("v-(l+s)-(t+y)-(c+f)+(b-(n-p))"),"v-l-s-t-y-c-f+b-n+p");
