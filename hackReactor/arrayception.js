/*

Arrayception
  Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

  Examples
    Input	
      array: [ [ 5 ], [ [ ] ] ]	
    Output
      2
    
    Input	
      array:[ 10, 20, 30, 40 ]	
    Output
      1
    
    Input	
      array: [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]	
    Output
      4

    Input	
      array:[ ]
    Output
      0

    Input	
      array:[ [ [ ] ] ]	
    Output
      0
*/

function arrayception(array){
  let count = 0;

  for ( let i = 0; i < array.length; i++ ) {
    if ( Array.isArray(array[i]) ) {
      recursiveCounter(array[i],count);
    }
  }

  function recursiveCounter(array,tempCount){

  }

  return count;
}

console.log(arrayception([[5], [[]]]	));
// console.log(arrayception([10, 20, 30, 40]	));
// console.log(arrayception([[10, 20], [[30, [40]]]]	));
// console.log(arrayception([]));
// console.log(arrayception([[[]]]	));