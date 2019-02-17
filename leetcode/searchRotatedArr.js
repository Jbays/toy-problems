/*

  https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/

  33. Search in Rotated Sorted Array

  Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

  (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

  You are given a target value to search. If found in the array return its index, otherwise return -1.

  You may assume no duplicate exists in the array.

  Your algorithm's runtime complexity must be in the order of O(log n).

  Example 1:
  Input: nums = [4,5,6,7,0,1,2], target = 0

  Output: 4

  Example 2:

  Input: nums = [4,5,6,7,0,1,2], target = 3
  Output: -1
*/



function search(nums,target){
  let beginning = 0;
  let end = nums.length-1;

  console.log(nums);
  console.log(target);

  if ( nums[beginning] === target ){
    beginning;
  }
  if ( nums[end] === target ){
    end;
  }

  let mid = Math.floor(end/2);

  if ( nums[mid] === target ) {
    return mid;
  }

  if ( nums.length <= 3 ) {
    return -1;
  }

  console.log('this is mid',mid);

  //if the first number is smaller than the mid number
  if ( nums[beginning] < nums[mid] ) {
    //then the first array is sorted
    if ( nums[beginning] < target && target > nums[mid] ) {
      console.log('nums.slice(0,mid)',nums.slice(0,mid));
    } else {
      console.log('nums.slice(mid)',nums.slice(mid+1));
      return search(nums.slice(mid+1),target);
    }
    
    
    let slice = nums.slice(beginning,mid);
  }
}

let input1 = [4,5,6,7,0,1,2];

console.log(search(input1,0))
// console.log(search(input1,3))