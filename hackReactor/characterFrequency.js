/*

  Character Frequency
  Write a function that takes as its input a string
    and returns an array of arrays as shown below sorted in descending order by frequency 
    and then by ascending order by character.

  Examples
  Input	string:'aaabbc'
  Output: "aaabbc"[["a", 3], ["b", 2], ["c", 1]]

  Input string: "mississippi"
  Output: [["i", 4], ["s", 4], ["p", 2], ["m", 1]]

  Input string: ""
  Output: []

*/

// function characterFrequency(string){
//   let recordKeeper = {};

//   for ( let i = 0; i < string.length; i++ ) {
//     if ( !recordKeeper[string[i]] ) {
//       recordKeeper[string[i]] = 1;
//     } else {
//       recordKeeper[string[i]]++;
//     }
//   }

//   let output = Object.entries(recordKeeper)

//   console.log('this is output', output);


//   output = Object.entries(recordKeeper).sort((a,b)=>{return b[1]-a[1]});
//   let outputKeysHaveUniqueValues = false;
//   let outputValues = Object.values(recordKeeper);
  
//   outputKeysHaveUniqueValues = outputValues.filter(onlyUnique).length === outputValues.length;

//   // console.log('outputValues',outputValues)
//   // console.log('outputValues.filter(onlyUnique)',outputValues.filter(onlyUnique))
//   // console.log('outputKeysHaveUniqueValues',outputKeysHaveUniqueValues)

//   if ( outputKeysHaveUniqueValues ) {
//     return output;
//   } else {
//     // console.log('this is output',output);
    
//     for ( let i = 1; i < output.length; i++ ) {
//       let lastEntry = output[i-1];
//       let currEntry = output[i];
      
//       if (lastEntry[1] === currEntry[1] ){
//         if ( currEntry[0] < lastEntry[0] ) {
//           let temp = currEntry[0];
//           currEntry[0] = lastEntry[0];
//           lastEntry[0] = temp;
//         }
//       }
//     }
//     return output;
//   }

//   function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
//   }
// }

function characterFrequency(string){
  let recordKeeper = {};

  for ( let i = 0; i < string.length; i++ ) {
    if ( !recordKeeper[string[i]] ) {
      recordKeeper[string[i]] = 1;
    } else {
      recordKeeper[string[i]]++;
    }
  }

  // let output = Object.entries(recordKeeper);

  // output.sort((a,b)=>{
  //   if ( a[1] !== b[1] ) {
  //     return b[1] - a[1];
  //   } else {
  //     return a[0].localeCompare(b[0]);
  //   }
  // })

  return Object.entries(recordKeeper).sort((a,b)=>{
    return b[1] - a[1] || a[0].localeCompare(b[0]);
  });
}


// console.log(characterFrequency('aaabbc'));
// console.log(characterFrequency('mississippi'));
// console.log(characterFrequency('popopo'));
console.log(characterFrequency('supercalifragilisticexpialidocious'));
// console.log(characterFrequency(''));