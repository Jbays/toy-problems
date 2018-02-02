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

function solve(str){
  let spaceLoc = [];

  //can probably use map
  str.split('').forEach((item,index)=>{
    if ( item === ' ' ){
      spaceLoc.push(index)
    }
  })

  let spacelessReversed = str.replace(/\W/g, '').split('').reverse()

  for ( let i = 0; i < spaceLoc.length; i++ ) {
    spacelessReversed.splice(spaceLoc[i],0," ")
  }

  return spacelessReversed.join('')
}

console.log("your code rocks >>>>",solve("your code rocks"))
// console.log("expected answer>>>>>","skco redo cruoy")
// console.log(solve("codewars"))
