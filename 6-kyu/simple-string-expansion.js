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

function solve(str){
  console.log("this is str>>>",str);
}

console.log("ababab >>>>>>>>>",solve("3(ab)"))
// console.log("abbbabbb >>>>>>>",solve("2(a3(b))"))
// console.log("bccbccbcc >>>>>>",solve("3(b(2(c)))"));
// console.log("kabaccbaccbacc >",solve("k(a3(b(a2(c))))"))
