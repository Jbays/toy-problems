/**
  medium

  https://leetcode.com/problems/search-a-2d-matrix-ii/

  Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

  Integers in each row are sorted in ascending from left to right.
  Integers in each column are sorted in ascending from top to bottom.
  Example:

  Consider the following matrix:

  [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  Given target = 5, return true.

  Given target = 20, return false.

 */

let matrix1 = 
  [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];

//time complexity is O(n+m) where n is the length of a given row and m is the height of the matrix.
//space complexity is O(1) since all memory required is only a few pointers.
function searchMatrix(matrix, target) {
  if ( matrix.length === 0 || matrix[0].length === 0 ) { return false };
  let colHeight = matrix.length;
  let rowWidth = matrix[0].length
  let startRow = colHeight-1;
  let startCol = 0;
  
  if ( colHeight === 1 ) { 
    let index = matrix[0].indexOf(target);

    return index === -1 ? false : true;
  }

  while ( startCol < rowWidth && startRow >= 0 ){
    let checkSquare = matrix[startRow][startCol];

    if ( checkSquare > target ) {
      startRow--;
    } else if ( checkSquare < target ) {
      startCol++
    } else {
      return true;
    }
  }

  return false;
};

let matrix2 = [[-1,3]]
let matrix3 = [[1,3,5]]
let matrix4 = [[-1],[-1]];

// console.log(searchMatrix(matrix1,5))
// console.log(searchMatrix(matrix1,20))
// console.log(searchMatrix(matrix2,3))
// console.log(searchMatrix(matrix3,-1))
console.log(searchMatrix(matrix4,-1))