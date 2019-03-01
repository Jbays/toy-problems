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

//time complexity  => O(n) where n is the length of the original array stringified
//space complexity => O(n) also!

function arrayception(array) {
  const stringifiedArr = JSON.stringify(array);

  let outputCount = 0;
  let tempCount = 0;
  for (let i = 0; i < stringifiedArr.length; i++) {
    let currChar = stringifiedArr[i];

    if (currChar === '[') {
      tempCount++;
    }
    if (currChar === ']') {
      tempCount--;
    }
    if (!isNaN(parseInt(stringifiedArr[i]))) {
      if (outputCount < tempCount) {
        outputCount = tempCount;
      }
    }
  }

  return outputCount;
}

// console.log(arrayception([[5], [[]]]	));
// console.log(arrayception([10, 20, 30, 40]	));
// console.log(arrayception([[10, 20], [[30, [40]]]]	));
// console.log(arrayception([]));
// console.log(arrayception([[[]]]	));
// console.log(arrayception([[10, 20], [[30, [40]]]]	));
// console.log(arrayception([1, [2], 3, [4, 5, [6], 7]]));
// console.log(arrayception([[],[[],[],[0,[[]]],[]],[]]));