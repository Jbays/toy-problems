/*
  Is Subset Of
    Make an array method that can return whether or not a context array is a subset of an input array. 
    To simplify the problem, you can assume that both arrays will contain only strings.

  input
  [].isSubsetOf([1,2,2])

  output
  []

  //should return true if all elements in the first array are in the second
  input
  ['cat','dog','cow'].isSubsetOf(['dog','cow','fox','cat'])

  output
  true

  //should return false if not all the elements in the first array are in the second
  input
  ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox']);
  
  output
  false

  //should disregard duplicates
  //should disregard order
  //should handle mixed arrays

  input
  [1, 'cat', 3].isSubsetOf([4, 3, 'cat', 1])

  output
  true
  
  input
  [1, 'cat', 3].isSubsetOf([4, 'cat', 1])

  output
  false
*/



// Array.prototype.isSubsetOf = function(array){
//   let record = {};
//   for ( let i = 0; i < this.length; i++ ) {
//     if ( !record[this[i]] && !array.includes(this[i]) ) {
//       return false;
//     }
//     record[this[i]] = true;
//   }

//   return true;
// }

//both these solutions are O(n) where n is equal to the length of 'this' from Array.prototype
Array.prototype.isSubsetOf = function(array){
  return this.every(val=> array.includes(val));
}

//true
console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']));
console.log([1, 'cat', 3].isSubsetOf([4, 3, 'cat', 1]));

//false
console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox']));
console.log([1, 'cat', 3].isSubsetOf([4, 'cat', 1]));