/*

https://leetcode.com/problems/product-of-array-except-self/

Product Of Array Except Self

Given an array nums of n integers where n > 1,  
  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
  Input:  [1,2,3,4]
  Output: [24,12,8,6]
  
Note: 
  Please solve it without division and in O(n).

Follow up:
  Could you solve it with constant space complexity? 
  The output array does not count as extra space for the purpose of space complexity analysis.

*/

const INPUT_1 = [1,2,3,4];
const INPUT_2 = [0,4,0];

function productExceptSelf(nums){
  let output = [];
  let forwardCmlProduct = cumulativeProduct(nums);
  let backwardCmlProduct = cumulativeProduct(nums.reverse());

  
  forwardCmlProduct.unshift(forwardCmlProduct[0]);
  backwardCmlProduct.unshift(backwardCmlProduct[0]);
  forwardCmlProduct.pop();
  backwardCmlProduct.pop();
  console.log('forwardCmlProduct',forwardCmlProduct)
  console.log('backwardCmlProduct',backwardCmlProduct)
  
  for ( let i = 0; i < forwardCmlProduct.length; i++ ) {
    output.push(forwardCmlProduct[i]*backwardCmlProduct[forwardCmlProduct.length-1-i]);
  }

  return output;

  function cumulativeProduct(inputArr){
    let output = [];

    for ( let i = 0; i < inputArr.length; i++ ) {
      if ( output[i-1] ) {
        output.push(inputArr[i]*output[i-1]);
      } else {
        output.push(inputArr[i]);
      }
    }

    return output;
  }
}

console.log(productExceptSelf(INPUT_1));
console.log(productExceptSelf(INPUT_2));