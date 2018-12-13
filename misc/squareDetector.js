/**

  Square Detector

  Given an input, count the number of squares.
  
  input:
    [ 
      ['_'],
      ['|','|'],
      ['_']
    ]
  
  output: 1

  input: 
    [
      ['_','_'],
      ['|','|','|'],
      ['_'],
      ['|','','|'],
      ['_','_']
    ]

  output: 2

  input: 
    [
      ['_','_'],
      ['|','|','|'],
      ['_'],
      ['|',],
      ['_','_']
    ]

  output: 1

  input: 
    [
      ['_','_','_'],
      ['l','l','l','l','l',],
      ['_'],
      ['l','','','l','l',],
      ['_','_','_',],
      ['l',],
      ['','_','_']
    ]

  output: 4

*/

let input1 = [ 
  ['_'],
  ['|','|'],
  ['_']
]

let input2 = [
  ['_','_'],
  ['|','|','|'],
  ['_'],
  ['|','','|'],
  ['_','_']
]

let input3 = [
  ['_','_'],
  ['|','|','|'],
  ['_'],
  ['|',],
  ['_','_']
]

let input4 = [
  ['_','_','_'],
  ['|','|','|','|','|',],
  ['_'],
  ['|','','','|','|',],
  ['_','_','_',],
  ['|',],
  ['','_','_']
]

function squareDetector(array){
  console.log(array);
  let count = 0;

  for ( let i = 0; i < array.length; i=i+2 ) {
    for ( let j = 0; j < array[i].length; j++ ) {
      console.log('i',i)
      console.log('array[i]',array[i])
    }
  }

  return count;
}

// function squareDetector(array){
//   let count = 0
//   console.log(array);

//   if ( array.length === 3 ) {
//     if ( checkSquare(array,1) ) {
//       count++;
//       return count;
//     }
//   }

//   // for ( let i = 0; i < array.length)

//   function checkSquare(array,dimensions){
//     if ( dimensions < 3 ) {
//       if ( dimensions === 1 ) {
//         let top = array[0][0];
//         let left = array[1][0];
//         let right = array[1][1];
//         let bottom = array[2][0];

//         console.log(top);
//         console.log(left);
//         console.log(right);
//         console.log(bottom);

//         if ( top && left && right && bottom ) {
//           return true;
//         }
//       } else {
//         let top1 = array[0][0];
//         let top2 = array[0][1];
//         let left1 = array[1][0];
//         let left2 = array[3][0];
//         let right1 = array[1][2];
//         let right2 = array[3][2];
//         let bottom1 = array[4][0];
//         let bottom2 = array[4][1];

//         if ( top1 && top2 && left1 && left2 && right1 && right2 && bottom1 && bottom2 ) {
//           return true;
//         }
//       }

//     } else {
//       console.log('this is hard!');
//     }
    
//     //perform check as-is

//     //if dimensions >= 3
//     //perform check as-is PLUS check for edges
//   }
//   return count;
// }

console.log(squareDetector(input1));
// console.log(squareDetector(input2));
// console.log(squareDetector(input3));
// console.log(squareDetector(input4));