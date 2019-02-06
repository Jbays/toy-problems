/*

  https://leetcode.com/problems/kth-largest-element-in-an-array/

  215. Kth Largest Element in an Array

  Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

  Example 1:

  Input: [3,2,1,5,6,4] and k = 2
  Output: 5

  Example 2:

  Input: [3,2,3,1,2,4,5,5,6] and k = 4
  Output: 4
  Note:
  You may assume k is always valid, 1 ≤ k ≤ array's length.

*/

//time complexity is O(n*log(n)) where n is the length of the input array (called nums)
//Faster than 28% of solutions.  So between the bottom 1/4 and 1/2.
function findKthLargest(nums, k) {
  nums = nums.sort((a,b)=>{return a-b});

  return nums[nums.length-k];
};

let input1 = [3,2,1,5,6,4]
let k1 = 2;

let input2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k2 = 4;

console.log(findKthLargest(input1,k1));