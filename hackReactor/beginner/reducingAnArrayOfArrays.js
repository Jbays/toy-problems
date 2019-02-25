/*

  Basic Set 3.3: Reducing an array of arrays
    Given an array of arrays, return those arrays concatenated together.

  Examples
    Input	
      arrays: [ [ 10, 20 ], [ 30 ], [ ] ]	
    
    Output
      [ 10, 20, 30 ]
    
    Input
      arrays: [ [ 22 ], [ 33, [ 44 ] ], [ 55 ] ]	
    
    Output
      [ 22, 33, [ 44 ], 55 ]
    
    Input
      arrays:[ ]
    Output
      []
*/

function concatArrays(arrays) {
  let output = [];

  for ( let i = 0; i < arrays.length; i++ ) {
    if ( Array.isArray(arrays[i]) ) {
      output.push(...arrays[i]);
    } else {
      output.push(arrays[i]);
    }
  }
  
  return output;
}

console.log(concatArrays([[10, 20], [30], []]))
console.log(concatArrays([[22], [33, [44]], [55]]	))