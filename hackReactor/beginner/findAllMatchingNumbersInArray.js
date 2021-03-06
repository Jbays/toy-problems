/*

Basic Set 2.2: Finding all matching numbers in an array
  Given an array of numbers, return all even numbers from the array.

  DO NOT use .filter() in your solution.

  DO use a for loop.

  TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

  Examples
    Input	
      numbers:[ 10, 20, 25, 30 ]
    Output
      [ 10, 20, 30 ]
*/

// function findEven(numbers) {
//   let output = [];

//   for ( let i = 0; i < numbers.length; i++ ) {
//     if ( numbers[i] % 2=== 0 ) {
//       output.push(numbers[i])
//     }
//   }

//   return output;
// }

function findEven(numbers,n=numbers.length,output=[]){
  if ( n > 0 ) {
    let popped = numbers.pop();
    if ( popped % 2 === 0 ) {
      output.unshift(popped)
    }
    return findEven(numbers,numbers.length,output);
  }

  return output;
}

console.log(findEven([10, 20, 25, 30],4,[]));
