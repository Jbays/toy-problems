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

function solve(string){
  console.log("original input>>",string);
  let staging = "";
  let mappedString = "";

  let val = string.split('').reduce((a,b)=>{
    if ( a.match(/[a-z]/) && b.match(/[a-z]/) ){
      return a+b
    } else {
      return a
    }
  }).length

  val = (string[0] === "-") ? 2*val : (2*val)-1;

  console.log("this is val",val);

  let snippet = string.indexOf("(");
  let start = 0;

  while ( staging.length < val ) {
    // snippet = string.indexOf("(");


    console.log("hello friends!",staging);
    staging += "1"
  }

  return staging;

  //this adds the extra pluses
  // for ( let i = 0; i < string.length; i++ ) {
  //   if ( string[i].match(/[a-z]/) ){
  //     if ( string[i-1] === "(" ){
  //       mappedString += "+"+string[i];
  //     } else {
  //       mappedString += string[i];
  //     }
  //   } else {
  //     mappedString += string[i];
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

  return staging;
}

//working
// console.log("a+(-b):",solve("a+(-b)")==="a-b");


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
