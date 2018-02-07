// https://www.codewars.com/kata/simple-string-reversal
// In this Kata, we are going to reverse a string while maintaining spaces.
//
// For example:
//
// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo".
// -- However, there is a space after the first three characters, hence "edo cruo"
//
// solve("your code rocks") = "skco redo cruoy"
// solve("codewars") = "srawedoc"
// More examples in the test cases. All input will be lower case letters and in some cases spaces.

/**
 * @name: solve
 * @description: reverses a string.  Spaces stay at the same place.
 * @param2: str
 * @returns: array
 **/
function solve(str){
  let output = "";

  for ( let i = str.length-1; i >= 0; i-- ) {
    if ( str[i] !== " " ) {
      output += str[i];
    }
    if ( str[output.length] === " " ) {
      output += str[output.length];
    }
  }
  return output;
}

//
// /**
//  * @name: solve
//  * @description: reverses a string.  Spaces stay at the same place.
//  * @param2: str
//  * @returns: array
//  **/
// function solve(str){
//   //calculates the index of all empty spaces
//   let spaceLoc = str.split('').map((item,index)=>{
//     if ( item === ' ' ){return index;}
//   }).filter((item)=>{ if ( item ){return item;}})
//
//   let spacelessReversed = str.replace(/\W/g, '').split('').reverse()
//
//   //this rebuilds the string
//   spaceLoc.forEach((item,index)=>{
//     spacelessReversed.splice(spaceLoc[index],0," ");
//   })
//
//   return spacelessReversed.join('')
// }

console.log("your code rocks >>>>",solve("your code rocks"))
// console.log("expected answer>>>>>","skco redo cruoy")
// console.log(solve("codewars"))
