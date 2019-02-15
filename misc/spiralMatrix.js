/*

  Write a function which writes numbers in a spiral matrix

  input: 1
  output: [[1]]

  input: 2
  output: [[1,2],[4,3]];

  input: 3
  output: [[1,2,3],[8,9,4],[7,6,5]];

  input: 4
  output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]];

  input: 5
  output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]];

*/

function spiralMatrix(num){
  let output = makeEmptyMatrix(num);
  let calls = (num <= 1 ) ? 1 : Math.ceil(num/2);
  let coordinates = returnTupleShell(0,calls,num,[]);
  
  console.log('these are your coordinates',coordinates);

  for ( let i = 0; i < coordinates.length; i++ ) {
    let row = coordinates[i][0];
    let col = coordinates[i][1];

    output[row][col] = i+1;
  }

  return output;

  function returnTupleShell(rowStart,totalRecursiveCalls,rowLength,containerArr){
    if ( totalRecursiveCalls <= 0 ) {
      return containerArr;
    }
    
    let row = rowStart;
    let col = rowStart;
    containerArr.push([row,col]);
    
    while ( col < rowLength-1 ) {
      col++;
      containerArr.push([row,col]);
    }
    
    while ( row < rowLength-1 ) {
      row++;
      containerArr.push([row,col]);
    }
    
    while ( col > rowStart ) {
      col--;
      containerArr.push([row,col]);
    }
    
    while ( row-1 > rowStart ) {
      row--;
      containerArr.push([row,col]);
    };

    totalRecursiveCalls--;
    rowLength-=2;
    rowStart++;
    return returnTupleShell(rowStart,totalRecursiveCalls,rowLength,containerArr);
  }

  function makeEmptyMatrix(number){
    let output = [];
    for ( let i = 0; i < number; i++ ) {
      let temp = [];
      for ( let j = 0; j < number; j++ ) {
        temp.push(undefined);
      }
      output.push(temp);
    }
    return output;
  }
}

// function spiralMatrix(num){
//   let output = makeEmptyMatrix(num);
//   let matrixCoordinates = generateSpiralCoords(num);

    
//   console.log('matrixCoordinates',matrixCoordinates)

//   function generateSpiralCoords(number){
//     let output = outermostCoordinateMapping(1,2,[ [ 0, 0 ],
//       [ 0, 1 ],
//       [ 0, 2 ],
//       [ 0, 3 ],
//       [ 1, 3 ],
//       [ 2, 3 ],
//       [ 3, 3 ],
//       [ 3, 2 ],
//       [ 3, 1 ],
//       [ 3, 0 ],
//       [ 2, 0 ],
//       [ 1, 0 ]]);
//     // let output = outermostCoordinateMapping(0,number,number-1,[]);
    
//       // console.log('output',output);

//     function outermostCoordinateMapping(rowStart,rowLength,array){
//       let row = rowStart;
//       let col = rowStart;

//       if ( rowLength <= 0 ) {
//         return array;
//       }

//       array.push([row,col]);
      
//       console.log('rowStart',rowStart);
//       console.log('rowLength',rowLength);
//       console.log('this is array',array);
      
//       while ( col < rowLength-1 ) {
//         col++;
//         array.push([row,col])
//       }

//       while ( row < rowLength-1 ) {
//         row++;
//         array.push([row,col]);
//       }

//       while ( col > rowStart ){
//         col--;
//         array.push([row,col]);
//       }

//       while ( row > rowStart+1 ) {
//         row--;
//         array.push([row,col]);
//       }

//       rowStart++;
//       rowLength-=2;
//       return outermostCoordinateMapping(rowStart,rowLength,array);
//     }
  
//     return output;
//   }

//   function makeEmptyMatrix(number){
//     let output = [];
//     for ( let i = 0; i < number; i++ ){
//       let temp = [];
//       for ( let j = 0; j < number; j++ ){
//         temp.push(undefined);
//       }
//       output.push(temp);
//     }
//     return output;
//   }
//   return output;
// }

// console.log(spiralMatrix(3));
console.log(spiralMatrix(4));
// console.log(spiralMatrix(5));