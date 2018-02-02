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
  //calculates the index of all empty spaces
  let spaceLoc = str.split('').map((item,index)=>{
    if ( item === ' ' ){return index;}
  }).filter((item)=>{ if ( item ){return item;}})

  let spacelessReversed = str.replace(/\W/g, '').split('').reverse()

  
  spaceLoc.forEach((item,index)=>{
    spacelessReversed.splice(spaceLoc[index],0," ");
  })

  return spacelessReversed.join('')
}

console.log("your code rocks >>>>",solve("your code rocks"))
// console.log("expected answer>>>>>","skco redo cruoy")
// console.log(solve("codewars"))
