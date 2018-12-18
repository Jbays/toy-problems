let input1 = 123;
let input2 = -123;
let input3 = 210;

// Given a 32-bit signed integer, reverse digits of an integer.

function reverse(integer){
  let stringified = integer.toString();
  let result = '';

  for ( let i = stringified.length-1; i >= 0; i-- ) {
    result += stringified[i];
  }

  output = parseInt(result);

  if ( integer < x ) {
    output = -output;
  }

  if ( output > 2147483648 || output < - 2147483648 ){
    return 0;
  }
  
  return output;
}

// console.log(reverse(input1));
// console.log(reverse(input2));
// console.log(reverse(input3));
console.log(reverse(1534236469));