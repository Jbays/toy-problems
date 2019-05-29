function sortedSquares(A){
  let output = [];
  
  let startPointer = 0;
  let endPointer = A.length-1;

  while ( startPointer <= endPointer ) {
    let firstVal = Math.abs(A[startPointer]);
    let lastVal = Math.abs(A[endPointer]);

    if ( firstVal < lastVal ){
      output.unshift(lastVal**2);
      endPointer--;
    } else {
      output.unshift(firstVal**2);
      startPointer++;
    }
  }
  
  return output;
  
  // return A.sort((a,b)=>{
  //   return Math.abs(a)-Math.abs(b);
  // }).map((elem)=>{
  //   return elem**2;
  // })
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));