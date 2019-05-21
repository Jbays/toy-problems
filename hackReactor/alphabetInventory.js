/*
  Alphabet Inventory
    Given an alphabet and a string of text, 
      write a method that tallies the count of each letter defined in said alphabet (case insensitive), 
      then return the result of this tally.
*/

// function alphaCount(alphabet,text){
//   let output = '';
//   let record = {};

//   for ( let i = 0; i < alphabet.length; i++ ) {
//     record[alphabet[i].toLowerCase()] = 0;
//     if ( output.length === 0 ) {
//       output = `${alphabet[i].toLowerCase()}:n`
//     } else {
//       output += `,${alphabet[i].toLowerCase()}:n`
//     }
//   }

//   for ( let i = 0; i < text.length; i++ ) {
//     if ( record.hasOwnProperty(text[i].toLowerCase()) ) {
//       record[text[i]]++;
//     }
//   }

//   for ( let key in record ) {
//     if ( record[key] === 0 ) {
//       delete record[key];
//     }
//   }

//   for ( let key in record ) {
//     console.log('this is key',key);
//     let keyIndexInOutput = output.indexOf(key);
//     console.log('this is keyIndexInOutput',keyIndexInOutput);
//     console.log('this is output[keyIndexInOutput+2]',output[keyIndexInOutput+2]);

//     output = output.replace(/n/,record[key]);
//   }

//   console.log(output);
//   console.log(record);
  
//   return output;
//   //this kinda words --> but not the way they want
//   // let record = {};

//   // for ( let i = 0; i < alphabet.length; i++ ) {
//   //   let lowerCase = alphabet[i].toLowerCase()
//   //   if (!record[lowerCase]){
//   //     record[lowerCase] = 0;
//   //   }
//   // }

//   // console.log(record);
  
//   // for ( let i = 0; i < text.length; i++ ) {
//   //   let lowerCase = text[i].toLowerCase();
//   //   if ( record.hasOwnProperty(lowerCase) ) {
//   //     record[lowerCase]++;
//   //   }
//   // }
//   // console.log(JSON.stringify(record).slice(1,-1));

//   // return JSON.stringify(record).slice(1, -1)
// }

//solution is O(n+m) where n is the length of alphabet
//  and m is the length of the input text
function alphaCount(alphabet,text){
  let record = {};
  for ( let i = 0; i < text.length; i++ ) {
    let lowerCaseLetter = text[i].toLowerCase();
    if (!record.hasOwnProperty(lowerCaseLetter) ) {
      record[lowerCaseLetter] = 1;
    } else {
      record[lowerCaseLetter]++;
    }
  }

  let output = '';
  for ( let i = 0; i < alphabet.length; i++ ) {
    let lowerCaseLetter = alphabet[i].toLowerCase();
    if ( record[lowerCaseLetter] ){
      if ( output.length === 0 ) {
        output = `${lowerCaseLetter}:${record[lowerCaseLetter]}`;
      } else {
        output += `,${lowerCaseLetter}:${record[lowerCaseLetter]}`;
      }
    }
  }
  return output ? output : 'no matches';
}

// console.log(alphaCount('aBc', 'aabbccdd')) //=> "a:2,b:2,c:2"
// console.log(alphaCount('x', 'Racer X is my friend! :)')) //=> "x:1"
// console.log(alphaCount('123','o hai')) //=> "no matches"
console.log(alphaCount('i984','ti89')) //=> "i:1,9:1,8:1"