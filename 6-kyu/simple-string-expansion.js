//https://www.codewars.com/kata/simple-string-expansion/train/javascript

// Consider the following expansion:
//
// solve("3(ab)") = "ababab" -- "ab" repeats 3 times
// solve("2(a3(b))" = "abbbabbb" -- "a3(b)" == "abbb" repeats twice.
// Given a string, return the expansion of that string.
//
// Input will consist of only lowercase letters and numbers in valid parenthesis.
// There will be no letters or numbers after the last closing parenthesis.
//
// More examples in test cases.
//
// Good luck!


// NOTE: this does not work for super long strings.  Not sure why.
function solve(str){
  let output = "";
  for ( let i = str.length-1; i >= 0; i-- ) {
    let lastOutput = "";
    if ( str[i] !== ")" ) {
      if ( str[i] !== "(" ) {
        if ( parseInt(str[i]) ) {
          for ( let j = 1; j < parseInt(str[i]); j++ ) {
            output = lastLetter + output;
          }
        } else {
          output = str[i] + output;
          lastLetter = output
        }
      }
    }
  }
  return output;
}

// console.log("ababab >>>>>>>>>",solve("(ab)"))
// console.log("ababab >>>>>>>>>",solve("3(ab)"))
// console.log("aababab >>>>>>>>>",solve("a3(ab)"))

// console.log("abbbabbb >>>>>>>",solve("2(a3(b))"))
console.log("bccbccbcc >>>>>>",solve("3(b(2(c)))"));
// console.log("kabaccbaccbacc >",solve("k(a3(b(a2(c))))"))
