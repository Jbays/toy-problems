// https://www.codewars.com/kata/longest-alphabetical-substring/javascript

//Longest alphabetical substring

// Find the longest substring in alphabetical order.
//
// Eg: the longest alphabetical substring in asdfaaaabbbbcttavvfffffdf
//is aaaabbbbctt.
//
// There are tests with strings up to 10000 characters long
//so your code will need to be efficient.
//
// The input will only consist of lowercase characters and will be at least one letter long.
//
// Good luck :)

function longest(str) {
  let output = "";
  let temp = "";

  for ( let i in str ) {
    let lastLetterTemp = temp ? temp[temp.length-1] : "";
    if ( temp === "" ) {
      temp += str[i];
    } else {
      if ( lastLetterTemp.charCodeAt() <= str[i].charCodeAt() ) {
        temp += str[i];
      } else {
        temp = "";
        temp += str[i];
      }
    }
    if ( output.length < temp.length ) {
      output = temp;
    }
  }
  return output;
}

// console.log("z >>>>>>>>>>",longest('z'));
// console.log("z >>>>>>>>>>",longest('zyba'));
// console.log("as >>>>>>>>>",longest('asd'));
// console.log("ab >>>>>>>>>",longest('nab'));
// console.log("abcde >>>>>>",longest('abcdeapbcdef'));
// console.log("fgikl >>>>>>",longest('asdfbyfgiklag'));
// console.log("aaaabbbbctt >",longest('asdfaaaabbbbcttavvfffffdf'));
