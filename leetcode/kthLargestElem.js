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
// function findKthLargest(nums, k) {
//   nums = nums.sort((a,b)=>{return a-b});

//   return nums[nums.length-k];
// };

function findKthLargest(array,k){
  let heap = []

  for ( let i = 0; i < k; i++ ) {
    insert(array[i],heap);
  };

  console.log('this is heap now',heap);

  for ( let i = k; i < array.length; i++ ) {
    let min = heap[0];
    if ( array[i] > min ) {
      removeMin(heap,k);
      insert(array[i],heap);
    }
  }

  console.log('this is your heap',heap);
  return heap[0];
}

function insert(val,array){
  array.push(val);
  upHeap(array,array.length-1);
}

function parent(index){
  return Math.floor((index-1)/2);
}

function removeMin(array,k){
  array[0] = array[array.length-1];
  array.pop();
  downHeap(array,0,k);
}

function downHeap(array,index,k){
  let temp = 0;
  let smallest = index;
  let leftIndex = left(index);
  let rightIndex = right(index);
  if ( leftIndex < array.length && array[leftIndex] < array[smallest] ) {
    smallest = leftIndex;
  }
  if ( rightIndex < array.length && array[rightIndex] < array[smallest] ) {
    smallest = rightIndex;
  }
  if ( index !== smallest ) {
    temp = array[index];
    array[index] = array[smallest];
    array[smallest] = temp;
    downHeap(array,smallest);
  }
}

function left(index){
  return 2*index+1;
}

function right(index){
  return 2*index+2;
}

function upHeap(array,index){
  let temp = 0;
  while ( index > 0 ) {
    let parentIndex = parent(index);
    if ( array[parentIndex] > array[index] ) {
      temp = array[parentIndex];
      array[parentIndex] = array[index];
      array[index] = temp;
      index = parentIndex;
    } else {
      break;
    }
  }
}

let input1 = [3,2,1,5,6,4]
let k1 = 2;

let input2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k2 = 4;

console.log(findKthLargest(input1,k1));