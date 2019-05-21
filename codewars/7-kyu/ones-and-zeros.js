const binaryArrayToNumber = arr => {
  let sum = 0;
  arr = arr.reverse();
  
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] === 1 ) {
      sum += 2**i;
    }
  }

  return sum;
};

console.log(binaryArrayToNumber([0,0,0,1]))
console.log(binaryArrayToNumber([0,0,1,0]))
console.log(binaryArrayToNumber([1,1,1,1]))