/*

  https://leetcode.com/problems/two-sum/

  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
*/

let nums = [2, 7, 11, 15];
let arr2 = [3,2,4];
let target = 9;

//naive solution.  O(n^2) where n is length of input array
function twoSum(array,target){
  for ( let i = 0; i < array.length; i++ ) {
    for ( let j = i+1; j < array.length; j++ ) {
      if ( array[j] === target - array[i] ) {
        return [i,j];
      }
    }
  }
}

//optimized solution.  O(n) where n is length of input array
function twoSum(array,target){
  let map = new Map();
  for ( let i = 0; i < array.length; i++ ) {
    let compliment = target - array[i];
    
    if ( map.has(array[i]) ) {
      return [map.get(array[i]),i];
    }
    map.set(compliment,i);
  }
}


// function twoSum(array,target){
//   let complimentHolder = {};
  //for each element in the array
    //calculate compliment = target - element
    //check if complimentHolder contains compliment
      //if so, return indices of loop and value from key-value pair
    //enter compliment into complimentHolder
//   return null;
// }

console.log(twoSum(nums,target))