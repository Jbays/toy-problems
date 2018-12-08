/**

  medium

  https://leetcode.com/problems/next-permutation/

  31. Next Permutation

  Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

  If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

  The replacement must be in-place and use only constant extra memory.

  Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

  1,2,3 → 1,3,2
  3,2,1 → 1,2,3
  1,1,5 → 1,5,1
  1,3,2 → 2,1,3
*/

let input1 = [1,2,3];
let input2 = [3,2,1];
let input3 = [1,1,5];
let input4 = [1,3,2];
let input5 = [1,3,2,0];
let input6 = [1,5,8,4,7,6,5,3,1];

function nextPermutation(array){
  let firstDecrementingIndex;
  let nextLargestValueIndex;
  let i = array.length-1;

  while ( !nextLargestValueIndex ) {
    let earlierVal = array[i+1];

    if ( earlierVal ) {
      if ( array[i] < earlierVal ) {
        firstDecrementingIndex = i;
        let temp = array[firstDecrementingIndex];
        nextLargestValueIndex = findNextLargestValue(array,firstDecrementingIndex);

        //swap!
        array[firstDecrementingIndex] = array[nextLargestValueIndex];
        array[nextLargestValueIndex] = temp;
        break;
      }
    }
    i--;

    if ( i < 0 ) {
      return array.sort((a,b)=>{return a-b});
    }

  }

  let firstHalf = array.slice(0,firstDecrementingIndex+1);
  let secondHalf = array.slice(firstDecrementingIndex+1).reverse();
  
  return firstHalf.concat(secondHalf);

  function findNextLargestValue(array,index){
    let firstDecrementingVal = array[index];
    let justHigherVal = null;
    let justHigherValIndex = null;
    
    for ( let i = index+1; i < array.length; i++ ) {
      if ( !justHigherVal ) {
        if ( array[i] > firstDecrementingVal ) {
          justHigherVal = array[i];
          justHigherValIndex = i;
        }
      }

      if ( array[i] > firstDecrementingVal ) {
        if ( justHigherVal > array[i] ) {
          justHigherVal = array[i];
          justHigherValIndex = i;
        }
      }

    }
    return justHigherValIndex;
  }
}

// console.log(nextPermutation(input1));
// console.log(nextPermutation(input2));
// console.log(nextPermutation(input3));
console.log(nextPermutation(input4));
// console.log(nextPermutation(input5));
// console.log(nextPermutation(input6));