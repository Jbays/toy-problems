// https://www.codewars.com/kata/name-to-matrix/train/javascript


// Given a name, turn that name into a perfect square matrix
//(nested array with the amount of arrays equivalent to the length of each array).
//
// You will need to add periods to the end of the name,
//as necessary, to turn it into a matrix.
//
// Example: "Bill" ==> [["B", "i"], ["l", "l"]]
//
// Example: "Frank" ==> [["F", "r", "a"], ["n", "k", "."], [".", ".", "."]]
//
// If the name has a length of 0,
//return "name must be at least one letter"

function matrixfy(str){
  if ( str.length === 0 ) {
    return "name must be at least one letter";
  }

  let output = [];
  let letters = str.split("");
  //if sqrt is not clean
  let nextSquare = (Math.sqrt(str.length) % 1 !== 0) ? Math.ceil(Math.sqrt(str.length)) : Math.sqrt(str.length);

  let temp = [];
  for ( let i = 0; i < Math.pow(nextSquare,2); i++ ) {
    let pushable = letters[i] ? letters[i] : ".";
    temp.push(pushable)
    if ( (i+1) % nextSquare === 0 ) {
      output.push(temp);
      temp = [];
    }
  }
  return output;
};


// console.log('name must be at least one letter',matrixfy(''));
console.log(([['A']]),(matrixfy('A')));
// console.log([["B","i"],["l","l"]],matrixfy("Bill"));
// console.log(([['F', 'r', 'a'], ['n', 'k', 'l'], ['i', 'n', '.']]),(matrixfy('Franklin')));
// console.log(matrixfy('aaFranklin'));
