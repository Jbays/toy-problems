// https://www.codewars.com/kata/rectangle-into-squares/train/javascript

// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).
//
// Can you translate this drawing into an algorithm?
//
// You will be given two dimensions
//
// a positive integer length (parameter named length)
// a positive integer width (parameter named width)
// You will return an array with the size of each of the squares.
//
// Shell bash returns a string.
//
//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]
// #Note: length == width as a starting case would be an entirely different problem and the drawing is planned to be interpreted with length != width. See kata, Square into Squares. Protect trees!.
//
// When the initial parameters are so that length == width, the solution [length] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing. Return {} with C++. Return the string "nil" with Bash.
//
// In that case the returned structure of C will have its sz component equal to 0. (See the "Solution" and "Examples" tabs)
//
//   sqInRect(5, 5) should return null

function sqInRect(length, width){
  if ( length === width ) { return null };

  let output = [];

  let area = length*width;
  let largest = (length > width) ? length : width;
  let smallest = (length < width) ? width : length;
  console.log("area>>",area);

  while ( area > 0 ) {
    
  }

  // for ( let i = smallest; i >= 1; i-- ) {
  //
  // }

  return output;

}

// console.log(sqInRect(5, 5), null)
console.log(sqInRect(5, 3), [3, 2, 1, 1])
// console.log(sqInRect(3, 5), [3, 2, 1, 1])
// console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])
