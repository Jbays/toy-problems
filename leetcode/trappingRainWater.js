/**

  hard

  https://leetcode.com/problems/trapping-rain-water/

  42. Trapping Rain Water

  Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

  Input: [0,1,0,2,1,0,1,3,2,1,2,1]
  Output: 6

*/

function trap(height){
  let rainWaterTrapped = 0;
  let leftPointer = 0;
  let rightPointer = height.length-1;
  let leftMax = 0;
  let rightMax = 0;

  while ( leftPointer < rightPointer ) {
    if ( height[leftPointer] < height[rightPointer] ) {
      if ( height[leftPointer] >= leftMax ) {
        leftMax = height[leftPointer];
      } else {
        rainWaterTrapped+=leftMax-height[leftPointer];
      }
      leftPointer++;
    } else {
      if ( height[rightPointer] >= rightMax ) {
        rightMax = height[rightPointer];
      } else {
        rainWaterTrapped+=rightMax-height[rightPointer];
      }
      rightPointer--;
    }
  }

  return rainWaterTrapped;
}

let input1 = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trap(input1));

//what is the difference between low points and local maxima?