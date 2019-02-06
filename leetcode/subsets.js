/*

  https://leetcode.com/problems/subsets/

  78. Subsets

  Given a set of distinct integers, nums, return all possible subsets (the power set).

  Note: The solution set must not contain duplicate subsets.

  Example:

  Input: nums = [1,2,3]
  Output:
    [
      [3],
      [1],
      [2],
      [1,2,3],
      [1,3],
      [2,3],
      [1,2],
      []
    ]

*/

let input1 = [1,2,3];
let input2 = [1,2];

//time complexity is O(n*2^n);
//where n is the length of the input array
function subsets(array){
  if ( array.length === 0 ) { return [] };
  let output = [];
  let totalPerms = 2**array.length;

  for ( let i = 0; i < totalPerms; i++ ) {
    let subset = [];
    //convert number to its equivalent binary string 
    let str = i.toString(2);
    
    for ( let j = str.length-1; j >= 0; j-- ) {
      if (str[j] === '1') {
        subset.unshift(array[array.length-str.length+j])
      }
    }
    output.push(subset);
  }

  return output;
}


console.log(subsets(input1));
// console.log(subsets(input2));