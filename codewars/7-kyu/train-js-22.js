// https://www.codewars.com/kata/training-js-number-22-unlock-new-skills-arrow-function-spread-operator-and-deconstruction/train/javascript

function shuffleIt(arr,...arr2){
  for ( let i = 0; i < arr2.length; i++ ) {
    let temp = arr[arr2[i][0]];
    arr[arr2[i][0]] = arr[arr2[i][1]];
    arr[arr2[i][1]] = temp;
  }
  return arr
}

console.log(shuffleIt([1,2,3,4,5],[1,2]) , [1,3,2,4,5]);
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4]) , [1,3,2,5,4]);
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) , [1,3,5,2,4]);
