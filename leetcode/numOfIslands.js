/**
 
  medium

  https://leetcode.com/problems/number-of-islands/


  Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
  You may assume all four edges of the grid are all surrounded by water.

  input: [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
  output: 1

  input: [['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]
  output: 3

*/

const input1 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
const input2 = [['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]

//time complexity is O(MxN) where M is number of Rows and N is number of Columns
function numIslands(grid){
  let islandCount = 0;

  //if grid has no rows or no columns
  if ( grid.length === 0 || grid[0].length === 0 ) { return 0 };

  for ( let i = 0; i < grid.length; i++ ) {
    for ( let j = 0; j < grid[i].length; j++ ) {
      if ( grid[i][j] === '1' ) {
        islandCount++;
        depthFirstSearch(grid,i,j);
      }
    }
  }
  
  function depthFirstSearch(grid,row,column){
    console.log(grid);
    grid[row][column] = '0';
    
    if (row - 1 >= 0 && grid[row-1][column] === '1') { depthFirstSearch(grid, row - 1, column) } ;
    if (row + 1 < grid.length && grid[row+1][column] === '1') { depthFirstSearch(grid, row + 1, column) };
    if (column - 1 >= 0 && grid[row][column-1] === '1') { depthFirstSearch(grid, row, column - 1) };
    if (column + 1 < grid[row].length && grid[row][column+1] === '1') { depthFirstSearch(grid, row, column + 1) };
  }

  return islandCount;
}

console.log(numIslands(input1))
console.log(numIslands(input2))