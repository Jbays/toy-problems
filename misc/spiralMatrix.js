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
  let matrixCoordinates = generateSpiralCoords(num);

  console.log('matrixCoordinates',matrixCoordinates)

  function generateSpiralCoords(number){
    let output = outermostCoordinateMapping(0,number,number-1,[]);
    
    function outermostCoordinateMapping(rowStart,rowLength,totalCalls,array){
      if ( totalCalls === 1 ) {
        // array.push([rowStart,rowStart])
        return array;
      }

      
      let row = rowStart;
      let col = rowStart;
      
      array.push([row,col]);

      console.log('rowStart',rowStart);
      console.log('rowLength',rowLength);
      console.log('this is array',array);
      
      while ( col < rowLength-1 ) {
        col++;
        array.push([row,col])
      }

      while ( row < rowLength-1 ) {
        row++;
        array.push([row,col]);
      }

      while ( col > rowStart ){
        col--;
        array.push([row,col]);
      }

      while ( row > rowStart+1 ) {
        row--;
        array.push([row,col]);
      }

      rowStart++;
      totalCalls--;
      rowLength-=2;
      return outermostCoordinateMapping(rowStart,rowLength,totalCalls,array);
    }
  
    return output;
  }

  function makeEmptyMatrix(number){
    let output = [];
    for ( let i = 0; i < number; i++ ){
      let temp = [];
      for ( let j = 0; j < number; j++ ){
        temp.push(undefined);
      }
      output.push(temp);
    }
    return output;
  }
  return output;
}

// console.log(spiralMatrix(3));
console.log(spiralMatrix(4));