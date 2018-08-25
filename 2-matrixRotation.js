//slice assignment

const testCase1 = [
  [1,2],
  [3,4]
];

const testCase2 = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
];
const testCase3 = [
  [1, 2,3,4],
  [12,1,2,5],
  [11,4,3,6],
  [10,9,8,7]
];

function matrixRotation(matrix,rotations){
  let rows = 0
  let columns = 0;
  let midPoint = findMidpoint(matrix);

  let dimensions = `${rows}x${columns}`;
  
  console.log('this is input \n',matrix);
  // console.log('this is midPoint',midPoint);
  // console.log('rows',rows);
  // console.log('columns',columns);

  function findSlices(matrix,matrixDimensions){
    let output = [];
    //the simplest case! 2x2 matrix
    if (parseInt(matrixDimensions.split('x')[0]) === 2 ) {
      
      output.push([matrix[0][1],matrix[1][1]],[matrix[0][0],matrix[1][0]])
      return output;
    } 
    
    if ( parseInt(matrixDimensions.split('x')[0]) === 3 ) {
      let topSlice = matrix[0].slice(0);
      let rightEdges = findEdges(matrix,dimensions,'right');
      let leftEdges = findEdges(matrix,dimensions,'left');
      let bottomSlice = matrix[rows-1].slice(0).reverse();
      
      output.push(...topSlice,...rightEdges,...bottomSlice,...leftEdges)
  
      //finally perform the swap
      let first = output.shift();
      output.push(first);
    }
    return output;
  }

  function findMidpoint(arrayOfArrays){
    rows = arrayOfArrays[0].length;

    arrayOfArrays.forEach((array)=>{columns++});

    return [(Math.floor(rows/2)-1),Math.floor((columns/2)-1)]
  }

  function findEdges(arrayOfArrays,matrixDimensions,direction){
    let output = []
    let edgeLocationsRow = [];

    for ( let i = 1; i <= rows-2; i++ ) {
      edgeLocationsRow.push(i);
    }
    edgeLocationsRow.forEach((sliceIndex)=>{
      if ( direction === 'right' ) {
        output.push(...arrayOfArrays[sliceIndex].slice(-1));
      } else {
        output.push(...arrayOfArrays[sliceIndex].slice(0,2))
      }
    })
    console.log('output',output);
    return output;
  }

  function recomposeMatrix(rotatedArray){
    console.log('rotatedArray',rotatedArray);
  }

  // findSlices(matrix,dimensions);
  let whatever = findSlices(matrix,dimensions);

  if ( rows === 2 ) {
    return whatever;
  }

  let finalOutput = [];
  for ( let i = 0; i < rows; i++ ) {
    finalOutput.push(whatever.slice(i*rows,i*rows+rows));
  }

  return finalOutput;
}

// console.log(matrixRotation(testCase1))
console.log(matrixRotation(testCase2))
// console.log(matrixRotation(testCase3))