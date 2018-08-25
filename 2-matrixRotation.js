//2x2
const testCase1 = [
  [1,2],
  [3,4]
];

//3x2
const testCase2 = [
  [1,2,3],
  [6,5,4]
]

//2x3
const testCase3 = [
  [1,2],
  [6,3],
  [5,4]
]

//3x3
const testCase4 = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
];

//4x3
const testCase5 = [
  [1 ,2,3,4],
  [10,1,2,5],
  [9 ,8,7,6],
]

//3x4
const testCase6 = [
  [1,2,3],
  [10,1,4],
  [9,2,5],
  [8,7,6]
]

//4x4
const testCase7 = [
  [1, 2,3,4],
  [12,1,2,5],
  [11,4,3,6],
  [10,9,8,7]
];

//4x5
const testCase8 = [
  [1, 2, 3,4],
  [14,1, 2,5],
  [13,6, 3,6],
  [12,5, 4,7],
  [11,10,9,8]
];

//5x4
const testCase9 = [
  [1, 2, 3, 4,5],
  [14,1, 2, 3,6],
  [13,6, 5, 4,7],
  [12,11,10,9,8]
];

// 5x5
const testCase10 = [
  [1,  2, 3, 4,5],
  [16, 1, 2, 3,6],
  [15, 8, 9, 4,7],
  [14, 7, 6, 5,8],
  [13,12,11,10,9]
]

function matrixRotation(matrix,r){
  let rows = matrix[0].length;
  let columns = 0;
  console.log('input matrix>>>',matrix);
  console.log('num required rotations',r);

  //for r number of rotations
  for ( let i = 0; i < r; i++ ) {
    //gather all elements
    let topAndBottom = [];
    let lastEdges = []
    matrix.forEach((subMatrix,index)=>{
      //if at the first or very last index
      if ( index === 0 ) {
        topAndBottom.push(...subMatrix);
      } else if ( !matrix[index+1] ){
        topAndBottom.push(...subMatrix.reverse());
      } else {
        topAndBottom.push(subMatrix[subMatrix.length-1]);
        lastEdges.push(subMatrix[0]);
      }
    });
    
    //perform anticlockwise translation
    let allRelevantElements = topAndBottom.concat(lastEdges.reverse());
    allRelevantElements.push(allRelevantElements[0])
    allRelevantElements.shift();
    console.log('allRelevantElements',allRelevantElements);
    
    //now let's try to walk back along the matrix while rewriting
    let counter = 0;
    matrix.forEach((subMatrix,index)=>{
      if ( index === 0 ) {
        //first step to rewrite -- do the top
        subMatrix.forEach((singleElement,innerIndex)=>{
          subMatrix[innerIndex] = allRelevantElements[innerIndex]
          counter++;
        })
      } else if ( !matrix[index+1] ) {
        //third step to rewrite -- do the bottom
        subMatrix.forEach((singleElement,innerIndex)=>{
          subMatrix[subMatrix.length-1-innerIndex] = allRelevantElements[counter];
          counter++;
        })
      } else {
        //fourth step to rewrite -- do the left-side edges
        subMatrix[0] = allRelevantElements[allRelevantElements.length-index];
        
        // subMatrix[0] = allRelevantElements[allRelevantElements.length-1];
        //second step to rewrite -- do the right-side edges
        subMatrix[subMatrix.length-1] = allRelevantElements[counter];
        counter++;
      }
    })
  }
  console.log('this is columns',columns)  
  return matrix;
}

// console.log(matrixRotation(testCase1,1))
// console.log(matrixRotation(testCase2,1))
// console.log(matrixRotation(testCase3,1))
// console.log(matrixRotation(testCase4,1))
// console.log(matrixRotation(testCase5,1))
// console.log(matrixRotation(testCase6,1))
console.log(matrixRotation(testCase7,3))
// console.log(matrixRotation(testCase8,1))
// console.log(matrixRotation(testCase9,1))