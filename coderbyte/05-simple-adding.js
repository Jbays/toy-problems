// Have the function SimpleAdding(num) add up all the
// numbers from 1 to num. For the test cases, the
// parameter num will be any number from 1 to 1000. 

// Correct Sample Outputs
// Input = 12   ||  Output = 78
// Input = 140  ||  Output = 9870

//  Old Solution
// function SimpleAdding(num) { 
//   //if argument is not a number
//   if (typeof num !== 'number' ) {
//     return undefined;
//   }
//   //edge case --> if num = 0 
//   if ( num === 0 ) {
//     return 0;
//   }
//   //base case --> if num = 1
//   if ( num === 1 ) {
//     //stops recursion
//     return num;
//   } else {
//     //recursively add num + (num-1) until (num === 1)
//     return num + SimpleAdding(num-1);
//   }      
// }

//Gaussian solution - very clean, elegant
//  suppose num = 100
//  correct output should be 5050
//  num + 1 = 101
//  num / 2 = 50
//  output = (num+1)*(num/2)
//  output = 101 * 50 === 5050
//  https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss

function SimpleAdding(num) { 
  var total = 0;
  for ( var i = 0; i < (num/2); i++ ) {
    total = total + (num+1)
  }
  return total;
}
