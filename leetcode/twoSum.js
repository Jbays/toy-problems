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

console.log(twoSum(nums,target))