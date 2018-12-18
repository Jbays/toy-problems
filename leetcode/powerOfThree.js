// Given an integer, write a function to determine if it is a power of three.

//time complexity is O(log 3 number)
function isPowerOfThree(number){
  if ( number < 1 ) { return false };

  while ( number % 3 === 0 ) {
    number /= 3;
  } 
  
  return number === 1;
}

console.log(isPowerOfThree(9))
console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(45))