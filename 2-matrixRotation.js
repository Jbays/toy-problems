//https://www.hackerrank.com/challenges/matrix-rotation-algo/problem

/*
  You are given a 2D matrix of dimension n x m and a positive integer r . 
  You have to rotate the matrix r times and print the resultant matrix. 
  Rotation should be in anti-clockwise direction.
*/
//2x2
const testCase1 = [
  [1,2],
  [4,3]
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
  // let columns = 0;
  console.log('input matrix>>>',matrix);
  console.log('num required rotations',r);

  //for r number of rotations
  for ( let i = 0; i < r; i++ ) {
    //in correct sequence, gather all elements into these arrays
    let topBottomAndRightEdges = [];
    let lastEdges = []
    matrix.forEach((subMatrix,index)=>{
      //if either first or last index, take whole array
      if ( index === 0 ) {
        topBottomAndRightEdges.push(...subMatrix);
      } else if ( !matrix[index+1] ){
        topBottomAndRightEdges.push(...subMatrix.reverse());
      } else {
        //else take right edges
        topBottomAndRightEdges.push(subMatrix[subMatrix.length-1]);
        //then take left edges
        lastEdges.push(subMatrix[0]);
      }
    });
    
    //combine these arrays in correct sequence
    let allRelevantElements = topBottomAndRightEdges.concat(lastEdges.reverse());
    //perform anticlockwise translation
    allRelevantElements.push(allRelevantElements[0])
    allRelevantElements.shift();
    // console.log('allRelevantElements',allRelevantElements);
    
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
        //second step to rewrite -- do the right-side edges
        subMatrix[subMatrix.length-1] = allRelevantElements[counter];

        //fourth step to rewrite -- do the left-side edges
        subMatrix[0] = allRelevantElements[allRelevantElements.length-index];
        counter++;
      }
    })
  }

  
  //logic for detecting whether input matrix has submatrices requiring r rotations
  //if either rows or columns is greater than 4
  //if both rows and columns are above 3
  return matrix;
}

//working -- all tested through r rotations
// console.log(matrixRotation(testCase1,1))
// console.log(matrixRotation(testCase2,1))
// console.log(matrixRotation(testCase2,1))
// console.log(matrixRotation(testCase3,1))
// console.log(matrixRotation(testCase4,1))

//not working --> center pieces not rotating
// console.log(matrixRotation(testCase5,1))
// console.log(matrixRotation(testCase6,1))
// console.log(matrixRotation(testCase7,3))
// console.log(matrixRotation(testCase8,1))
// console.log(matrixRotation(testCase9,1))