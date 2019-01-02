/**
 
  11. leetcode

  https://leetcode.com/problems/container-with-most-water/

  Given n non-negative integers a1, a2, ..., an , 
    where each represents a point at coordinate (i, ai). 
    n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
    Find two lines, which together with x-axis forms a container, such that the container contains the most water.

  Note: You may not slant the container and n is at least 2.

*/

function maxArea(height){
  let max = 0;
  let i = 0;
  let j = height.length-1;
  
  while ( j > i ) {
    let a = height[i];
    let b = height[j];
    let lowestWall = Math.min(a,b)

    let area = lowestWall*(j-i);

    if ( area > max ) {
      max = area;
    }

    if ( b > a ) {
      i++;
    } else {
      j--;
    }

  }

  return max;
}

let arr1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(arr1));