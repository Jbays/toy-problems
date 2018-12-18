/**
  easy

  https://leetcode.com/problems/island-perimeter/
 

  You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

  Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

  The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

  

  Example:

  Input:
  [[0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]]

  Output: 16

*/

let output = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
]

function islandPerimeter(arrayOfArrays){
  let perimeterCount = 0;

  arrayOfArrays.forEach((row,arrayIndex)=>{

    row.forEach((char,rowIndex)=>{
      if ( char === 1 ) {
        checkAgainstMapEdge(arrayOfArrays,arrayIndex,rowIndex);
        checkNeighborsForZeros(arrayOfArrays,arrayIndex,rowIndex);
      }
    })
  })

  function checkAgainstMapEdge(wholeGrid,rowPosition,colPosition){
    if ( wholeGrid[rowPosition-1] === undefined ) {
      perimeterCount++;
    }
    
    if ( wholeGrid[rowPosition][colPosition-1] === undefined ) {
      perimeterCount++;
    }
    
    if ( wholeGrid[rowPosition+1] === undefined ) {
      perimeterCount++;
    }
    
    if ( wholeGrid[rowPosition][colPosition+1] === undefined ) {
      perimeterCount++
    }
  }

  function checkNeighborsForZeros(wholeGrid,rowPosition,colPosition){
    if ( wholeGrid[rowPosition-1] ){
      if ( wholeGrid[rowPosition-1][colPosition] === 0 ) {
        perimeterCount++;
      }
    }
    
    if ( wholeGrid[rowPosition][colPosition-1] === 0 ) {
      perimeterCount++;
    }
    
    if ( wholeGrid[rowPosition+1] ){
      if ( wholeGrid[rowPosition+1][colPosition] === 0 ) {
        perimeterCount++;
      }
    }
    
    if ( wholeGrid[rowPosition][colPosition+1] === 0 ) {
      perimeterCount++
    }
  }

  return perimeterCount;
}


console.log(islandPerimeter(output));