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
  ['|','|','|','|'],
  ['_','_','_'],
  ['|','|','|','|'],
  ['_','_','_'],
  ['|','|','|','|'],
  ['_','_','_'],
]

let input7 = [
  ['_','_','_','_'],
  ['|','|','|','|','|'],
  ['_','_','_','_'],
  ['|','|','|','|','|'],
  ['_','_','_','_'],
  ['|','|','|','|','|'],
  ['_','_','_','_'],
  ['|','|','|','|','|'],
  ['_','_','_','_'],
]

function squareDetector(array){
  console.log(array);
  let count = 0;

  for ( let i = 0; i < array.length; i+=2 ) {
    console.log(array[i]);
    for ( let j = 0; j < array[i].length; j++ ) {
      let topLeftCorner = array[i][j] === '_';
      
      for ( let k = 1; k <= array[i].length; k++ ) {
        let bottomMostArr = Array.isArray(array[i+2*k]);
        let topRightCorner = array[i][j+k-1] === '_';

        if ( topLeftCorner && topRightCorner && bottomMostArr ) {
          count = findSquare(i,j,k,count)
        }

      }

    }
  }

  function findSquare(row,col,squareSize,counter){
    let leftTopCorner = array[row+1][col] === '|';
    let rightTopCorner = array[row+1][col+squareSize] === '|';
    let bottomLeftCorner = array[row+2*squareSize][col] === '_';

    // console.log('row',row)
    // console.log('col',col)
    // console.log('squareSize >>>',squareSize)
    // console.log('counter',counter)
    // console.log('leftTopCorner',leftTopCorner)
    // console.log('rightTopCorner',rightTopCorner)
    // console.log('bottomLeftCorner',bottomLeftCorner)

    if ( squareSize === 1 ) {
      if ( leftTopCorner && rightTopCorner && bottomLeftCorner ) {
        counter++;
        return counter;
      }
    }

    let leftBottomCorner = array[row+2*squareSize-1][col];
    let rightBottomCorner = array[row+2*squareSize-1][col+squareSize];
    let bottomRightCorner = array[row+2*squareSize][col+squareSize-1];

    if ( squareSize === 2 ) {
      if ( leftTopCorner && rightTopCorner && bottomLeftCorner && leftBottomCorner && rightBottomCorner && bottomRightCorner ){
        counter++;
        return counter;
      }
    }

    if ( squareSize === 3 ) {
      let topEdge = array[row][col+1] === '_';
      let bottomEdge = array[row+2*squareSize][col+1] === '_';
      let leftEdge = array[row+1][col] === '|';
      let rightEdge = array[row+1][col+1] === '|';

      if ( topEdge && bottomEdge && leftEdge && rightEdge ) {
        counter++;
        return counter;  
      }
    } 

    if ( squareSize > 3 ) {
      console.log('bigger boat!');

      // if ( findEdges(array,row,col,squareSize) ) {
      //   counter++;
      // }

      return counter;

  
      function findEdges(inputArray,inputRow,inputCol,inputSqSize,counter){
        let firstArr = inputArray.shift();
        firstArr.shift();
        firstArr.pop();
        let lastArr = inputArray.pop();
        lastArr.shift();
        lastArr.pop();

        for ( let l = 0; l < firstArr.length; l++ ) {
          if ( firstArr[l] !== '_' || lastArr[l] !== '_' ){
            return false;
          }
        }

        for ( let l = 0; l < inputArray.length; l++ ) {
          let first = inputArray[l].shift();
          let last = inputArray[l].pop();

          if ( first !== '|' || last !== '|' ) {
            return false;
          }
        }

        return true;
      }

    }
    
    return counter;
  }

  return count;
}



// console.log(squareDetector(input2));
// console.log(squareDetector(input3));
// console.log(squareDetector(input4));

// console.log('1x1 trival works: ',squareDetector(input1)===1);
// console.log('2x2 trivial works: ',squareDetector(input5)===5);
// console.log('2x2 trivial works: ',squareDetector(input5));
// console.log('3x3 trivial works: ',squareDetector(input6));
console.log(squareDetector(input7));