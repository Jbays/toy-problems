/*

Basic Set 1.1: Searching for a string in an array
  Given a string and an array of strings, return true if the string exists in the array, and false if it does not.

  DO NOT use .includes() in your solution.

  DO use a for loop.

  TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

*/

//time complexity: O(n) where n is the array length
function searchString(str, array) {
  for (let i = 0; i < array.length; i++) {
    if (str === array[i]) {
      return true;
    }
  }

  return false;
}

