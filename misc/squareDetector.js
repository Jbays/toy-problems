/**

  Square Detector

  Given an input, count the number of squares.
  
  input:
    [ 
      ['_'],
      ['|','|'],
      ['_']
    ]
  
  output: 1

  input: 
    [
      ['_','_'],
      ['|','|','|'],
      ['_'],
      ['|','','|'],
      ['_','_']
    ]

  output: 2

  input: 
    [
      ['_','_'],
      ['|','|','|'],
      ['_'],
      ['|',],
      ['_','_']
    ]

  output: 1

  input: 
    [
      ['_','_','_'],
      ['l','l','l','l','l',],
      ['_'],
      ['l','','','l','l',],
      ['_','_','_',],
      ['l',],
      ['','_','_']
    ]

  output: 4

*/

let input1 = [ 
  ['_'],
  ['|','|'],
  ['_']
];

let input2 = [
  ['_','_'],
  ['|','|','|'],
  ['_'],
  ['|','','|'],
  ['_','_']
];

let input3 = [
  ['_','_'],
  ['|','|','|'],
  ['_'],
  ['|',],
  ['_','_']
];

let input4 = [
  ['_','_','_'],
  ['|','|','|','|','|',],
  ['_'],
  ['|','','','|','|',],
  ['_','_','_',],
  ['|',],
  ['','_','_']
];

let input5 = [
  ['_','_'],
  ['|','|','|'],
  ['_','_'],
  ['|','|','|'],
  ['_','_'],
]

let input6 = [
  ['_','_','_'],
  ['|','|','|'],
  ['_','_'],
  ['|','|','|'],
  ['_','_'],
]



function squareDetector(array){
  let count = 0;

  for ( let i = 0; i < array.length; i=i+2 ) {
    for ( let j = 0; j < array[i].length; j++ ) {
      let squareOfThisSize = 1;
      let topLeftOfSquare = array[i][j];
      let bottomArr = array[i+2*squareOfThisSize];
      let futureArr = array[i+3*squareOfThisSize];

      //if top of square is defined && the array which SHOULD contain bottom of square is defined
      if ( topLeftOfSquare === '_' && Array.isArray(bottomArr) ) {
        while ( (squareOfThisSize+j) <= array[i].length ){
          count = checkForSquare(i,j,squareOfThisSize,count);
          
          if ( Array.isArray(futureArr) ){
            squareOfThisSize++;
          } else {
            j++;
          }
        }

      }
    }
  }

  function checkForSquare(startRow,startCol,squareSize,counter){
    // console.log('this is array',array);
    console.log('this is startRow',startRow);
    console.log('this is startCol',startCol);
    console.log('this is squareSize',squareSize);
    console.log('this is array[startRow]',array[startRow]);
      
    if ( squareSize === 1 ) {
      //if the left, right, and bottom pieces are in place
      if ( array[startRow+squareSize][startCol] === '|' && 
           array[startRow+squareSize][startCol+squareSize] === '|'&& 
           array[startRow+2][startCol] === '_') {
        counter++;
        return counter;
      }
    }
    
    let topRight = array[startRow][startCol+squareSize-1] === '_';
    let leftTop = array[startRow+squareSize-1][startCol] === '|';
    console.log('array[startRow+2*squareSize-1]',array[startRow+2*squareSize-1]);
    let leftBottom = array[startRow+2*squareSize-1][startCol] === '|';
    let rightTop = array[startRow+1][startCol+squareSize-1] === '|';
    let rightBottom = array[startRow+squareSize+1][startCol+squareSize] === '|';
    let bottomLeft = array[startRow+2*squareSize][startCol] === '_';
    let bottomRight = array[startRow+2*squareSize][startCol+squareSize-1] === '_';
    
    if ( topRight && leftTop && leftBottom && rightTop && 
         rightBottom && bottomLeft && bottomRight ){
      
      if ( squareSize === 2 ) {
        counter++;
      } else {
        //find all edges
      }
    }
    return counter;

  }
  return count;
}

// console.log(squareDetector(input1));
// console.log(squareDetector(input2));
// console.log(squareDetector(input3));
// console.log(squareDetector(input4));
console.log(squareDetector(input5));
// console.log(squareDetector(input6));