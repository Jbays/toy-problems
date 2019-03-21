/*
  Largest Product of Three
    Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

    Examples
      Input	
       array:[ 2, 1, 3, 7 ]	
      
      Output
       42
      
      Input	
        array:[ 0, 2, 3 ]	
      Output
        0
*/

//naive solution
//O(n^3) time complexity
//O(1)   space complexity

//sort solution
//O(n*log(n)) time complexity
//O(n)        space complexity

//O(n) time complexity
//O(1) space complexity

//where n is the length of the input array
function largestProductOfThree(array){
  let maxA = null;
  let maxB = null;
  let maxC = null;
  let minA = null;
  let minB = null;

  for ( let i = 0; i < array.length; i++ ) {
    if ( maxA === null ) {
      maxA = array[i];
    } else if ( array[i] > maxA ) {
      maxC = maxB;
      maxB = maxA;
      maxA = array[i];
    } else if ( array[i] > maxB ) {
      maxC = maxB;
      maxB = array[i];
    } else if ( array[i] > maxC ) {
      maxC = array[i];
    }
    if ( minA === null ) {
      minA = array[i];
    } else if ( array[i] < minA ) {
      minB = minA;
      minA = array[i]
    } else if ( array[i] < minB ) {
      minB = array[i];
    }
  }

  let product1 = maxA*maxB*maxC;
  let product2 = maxA*minA*minB

  return ( product1 > product2 ) ? product1 : product2;
}


// some very annoying test cases!!
// console.log(largestProductOfThree([0,2,3]));
// console.log(largestProductOfThree([2,1,3,7]));
// console.log(largestProductOfThree([5, 5, 5, 6, 6, 6, 6, 7, 7, 7]));
// console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29]));
// console.log(largestProductOfThree([-5,-1,-3,-2,-4]));
// console.log(largestProductOfThree([11,7,5,3,2]));
