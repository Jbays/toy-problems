// https://www.codewars.com/kata/reverse-fizzbuzz/train/javascript

//FizzBuzz is often one of the first programming puzzles people learn.
//Now undo it with reverse FizzBuzz!

// Write a function that accepts a string,
//which will always be a valid section of FizzBuzz.
//Your function must return an array that contains the numbers in order that generate that section of FizzBuzz.
//
// For instance:
//
// reverse_fizzbuzz("1 2 Fizz 4 Buzz")   #returns [1, 2, 3, 4, 5]
// reverse_fizzbuzz("Fizz 688 689 FizzBuzz") #returns [687, 688, 689, 690]
// reverse_fizzbuzz("Fizz Buzz")         #returns [9, 10]
// Notes:
//
// If a sequence can appear multiple times within FizzBuzz,
// return the numbers that generate the first instance of that sequence.
// You will never be passed an empty sequence.
// All numbers in the sequence will be greater than zero.

function reverseFizzBuzz(s) {
  if ( s === "Fizz" ) {
    return [3]
  } else if ( s === "Buzz" ) {
    return [5]
  } else if ( s === "FizzBuzz" ) {
    return [15]
  } else if ( s === "Fizz Buzz" ) {
    return [9,10]
  } else if ( s === "Buzz Fizz" ) {
    return [5,6]
  }

  let split = s.split(' ');
  let totalLength = split.length;
  let output = [];

  //front-fill
  for ( let i = 0; i < split.length; i++ ) {
    let hopefullyNumber = parseInt(split[i]);

    if ( hopefullyNumber ) {
      for ( let j = hopefullyNumber; j < hopefullyNumber+totalLength-i; j++ ) {
        output.push(j);
      }
      //back-fill
      if ( i !== 0 ) {
        let temp = []
        for ( let k = hopefullyNumber-i; k < hopefullyNumber; k++ ) {
          temp.push(k);
        }
        output = temp.concat(output);
      }
      return output;
    }
  }
}

// console.log("[1, 2, 3, 4, 5] >>>>>>>",
//   reverseFizzBuzz("1 2 Fizz 4 Buzz"));
// console.log("[5, 6, 7, 8, 9, 10] >>>>>>>",
//   reverseFizzBuzz("Buzz Fizz 7 8 Fizz Buzz"));
// console.log("[687, 688, 689, 690] >>",
//   reverseFizzBuzz("Fizz 688 689 FizzBuzz"));
console.log("[9, 10] >>>>>>>>>>>>>>>",reverseFizzBuzz("Fizz Buzz"));
