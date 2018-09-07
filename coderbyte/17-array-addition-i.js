// have the function ArrayAdditionI(arr) take the array of
// numbers stored in arr and return the string true if any
// combination of numbers in the array can be added up to
// equal the largest number in the array, otherwise return
// the string false. For example: if arr contains
// [4, 6, 23, 10, 1, 3] the output should return true because
// 4 + 6 + 10 + 3 = 23. The array will not be empty, will not
// contain all the same elements, and may contain negative numbers. 

// Correct Sample Output
// Input = 5,7,16,1,2    ||  Output = "false"
// Input = 3,5,-1,8,12   ||  Output = "true"

function ArrayAdditionI(arr) { 
  //sort arr argument from least to greatest
  var leastToGreatest = arr.sort(function(a,b){
    return a - b;
  });
  //largest element in the arr
  var largest = leastToGreatest.pop();

  //checks if sum can be made using the passed array argument
  //if not, will remove smallest number and recursively check.
  function recursion(sum,array){
    //base case when array is empty
    if ( array.length === 0 ) {
      //sum should equal 0
      return sum === 0; 
    }
    //selects smallest number in the array
    var smallest = array[0];
    //removes the smallest number from the rest of the array argument
    var array = array.slice(1);

    //checks if EITHER array contains sum OR (sum-smallest)
    return recursion(sum,array) || recursion(sum - smallest, array);
  }
  return recursion(largest,leastToGreatest);        
}