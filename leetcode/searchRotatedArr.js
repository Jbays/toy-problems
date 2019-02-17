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



// function search(nums,target){
//   let beginning = 0;
//   let end = nums.length-1;
//   if ( nums[beginning] === target ){
//     beginning;
//   }
//   if ( nums[end] === target ){
//     end;
//   }
//   let mid = Math.floor(end/2);
//   if ( nums[mid] === target ) {
//     return mid;
//   }
//   if ( nums.length <= 3 ) {
//     return -1;
//   }
//   //if the first number is smaller than the mid number
//   if ( nums[beginning] < nums[mid] ) {
//     //then the first array is sorted
//     if ( nums[beginning] < target && target > nums[mid] ) {
//       console.log('nums.slice(0,mid)',nums.slice(0,mid));
//     } else {
//       console.log('nums.slice(mid)',nums.slice(mid+1));
//       return search(nums.slice(mid+1),target);
//     }
//     let slice = nums.slice(beginning,mid);
//   }
// }


//O(log (n)) time complexity
//O(1) space complexity  
function search(nums,target){
  let beginning = 0;
  let end = nums.length-1;

  while ( beginning < end ) {
    if ( nums[beginning] === target ) {
      return beginning
    }
    
    if ( nums[end] === target ) {
      return end;
    }
    
    let mid = Math.floor((beginning+end)/2);

    if ( nums[mid] === target ) {
      return mid;
    }

    //if the first number is smaller than the middle number
    if ( nums[beginning] < nums[mid] ) {
      //the first half the array is sorted
      
      //if target is bigger than the first number and smaller than the second number
      if ( nums[beginning] < target && target < nums[mid] ) {
        //then target is within this range
        end = mid-1;
        beginning++;
      } else {
        beginning = mid+1;
        end--;
      } 
    } else {
      //the second half of the array is sorted

      //if target is bigger than middle number and smaller than last number
      if ( nums[mid] < target && target < nums[end] ) {
        beginning = mid+1;
        end--;
      } else {
        end = mid-1;
        beginning++;
      }
    }
  }

  return -1;
}

let input1 = [4,5,6,7,0,1,2];


// Runtime: 72 ms, faster than 46.35% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Search in Rotated Sorted Array.
console.log(search(input1,0))
console.log(search(input1,10))
console.log(search(input1,3))
console.log(search(input1,1))