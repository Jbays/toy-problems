// https://www.codewars.com/kata/interesting-pyramid/train/javascript

// You have to follow some rules and examples given below and write a code for printing an interesting pattern with input as n
//
// input should be any natural number, if either negative or decimal return check input
// space only on the left half of the pattern
// keep in mind the spaces between a single element in the pattern
// no new line at the end
// #Examples:
//
// ###pattern(3)
//
//        *
//      1 2 3
//     # # # #
// ###pattern(12)
//
//                    *
//                  1 2 3
//                 # # # #
//                * * * * *
//               1 2 3 4 5 6
//              # # # # # # #
//             * * * * * * * *
//            1 2 3 4 5 6 7 8 9
//           # # # # # # # # # #
//          * * * * * * * * * * *
//         1 2 3 4 5 6 7 8 9 0 1 2
//        # # # # # # # # # # # # #

function pattern(n){
  if ( n < 0 || n % 1 !== 0 ) {
    return "check input";
  }

  if ( n === 1 ) {
    return "*"
  }

  let output = "";

  if ( n > 1 ) {
    // let length
    // output = "*\n"
    for ( let i = n; i > 0; i-- ) {
      // output
      let writeChar;
      let remainder = i % 3;
      console.log("n >>>>>>>>>>>",n);
      console.log("remainder>>>>",remainder);

      if ( remainder === 0 ) {
        writeChar = "*"
        for ( let j = 0; j < n; j++ ) {
          output += " ";
        }
        output += writeChar+"\n";
      }

      if ( remainder === 2 ) {
        writeChar = i;
        output += (i !== 1) ? writeChar+"\n" :writeChar;
      }

      if ( remainder === 1 ) {
        writeChar = "#";
        output += writeChar+"\n";
      }

    }
  }

  return output;

}

// console.log("check input",pattern(-2))
// console.log("  *\n1 2 3",pattern(2));
console.log("    *\n  1 2 3\n # # # #","\n",pattern(3));
// console.log("       *\n     1 2 3\n    # # # #\n   * * * * *\n  1 2 3 4 5 6\n # # # # # # #","\n",pattern(6));
// console.log("        *\n      1 2 3\n     # # # #\n    * * * * *\n   1 2 3 4 5 6\n  # # # # # # #\n * * * * * * * *",pattern(7));
