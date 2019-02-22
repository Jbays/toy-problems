/*

  Even Occurrence
    Find the first item that occurs an even number of times in an array. 
    Remember to handle multiple even-occurrence items and return the first one. 
    Return null if there are no even-occurrence items.

    Input	
    [1, 3, 3, 3, 2, 4, 4, 2, 5]	
    
    Output
    2
    
    Input
    ["cat", "dog", "dig", "cat"]
    
    Output
    'cat'
*/

// function evenOccurrence(array){
//   let record = {};
//   // let twoOccurrencesOrMore = [];
//   let seenBefore = [];

//   for ( let i = 0; i < array.length; i++ ) {
//     if ( !record[array[i]] ) {
//       record[array[i]] = 1;
//       seenBefore.push(array[i]);
//     } else {
//       record[array[i]]++;
//     }
//   }

//   console.log(seenBefore);

//   for ( let i = 0; i < seenBefore.length; i++ ) {
//     if ( record[seenBefore[i]] % 2 === 0 ) {
//       return seenBefore[i];
//     }
//   }
//   // for ( let i = 0; i < twoOccurrencesOrMore.length; i++ ) {
//   //   if ( record[twoOccurrencesOrMore[i]] % 2 === 0 ) {
//   //     return twoOccurrencesOrMore[i];
//   //   }
//   // }

//   return null;
// }

//this solution is O(n) -- where n the length of the input array
function evenOccurrence(array){
  let record = {};

  array.forEach((element)=>{
    if ( !record[element] ) {
      record[element] = 1;
    } else {
      record[element]++;
    }
  })

  for ( let i = 0; i < array.length; i++ ) {
    if ( record[array[i]] % 2 === 0 ) {
      return array[i];
    }
  }

  return null;
}


//this solution is O(n*n-prime) time complexity -- where n is the length of the input array and n-prime is equal to the total unique values contained in n
//this solution is O(n-prime) space complexity -- where n-prime is equal to the total unique values contained in input array.

// function evenOccurrence(array) {
//   let record = {};
//   let seenBefore = [];

//   for (let i = 0; i < array.length; i++) {
//     if (!record[array[i]]) {
//       record[array[i]] = 1;
//       seenBefore.push(array[i]);
//     } else {
//       record[array[i]]++;
//     }
//   }

//   for (let i = 0; i < seenBefore.length; i++) {
//     if (record[seenBefore[i]] % 2 === 0) {
//       return seenBefore[i];
//     }
//   }

//   return null;
// }

console.log(evenOccurrence(['cat','dog','dig','cat']));
console.log(evenOccurrence(["rob", "victor", "fred", "jess", "rob", "rob"]));

//this expected output is 2 --> not 4!
console.log(evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5]));