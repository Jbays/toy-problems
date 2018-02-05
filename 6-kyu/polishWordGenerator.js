// The Polish language is famous for its difficult to pronounce words with very few vowels.
//For example: Pszczyna, a town in Southern Poland, or scczescie, which means happiness.
//
// Your task is to create a function that would generate similar words with very few vowels.
//Specifically, all possible combinations from the given word, by preserving the consonants in place while swapping the vowel(s) in the word with other vowels to create as many possible permutations.
//
// For example: output for generator (Pszczyna) would produce an array:
//['pszczyna', 'pszczyne', 'pszczyni', 'pszczyno', 'pszczynu'].
//
// Vowels are: A, E, I, O, and U
//
// Input: string (length > 0), that consists of only letter characters,
// of which no more than three vowels.
//
// Output: alphabetically sorted array of words in lowercase,
//with all possible combinations of vowels.
//
// Don't forget to try to pronounce what you produce!

function wordGenerator(str){
  let lowerCaseStr = str.toLowerCase();
  //include the base case
  let output = [lowerCaseStr];
  let vowelLocations = [];

  const vowels = ['a','e','i','o','u'];

  if ( !/[aeiou]/.test(lowerCaseStr) ) {
    return output;
  }

  let vowelsContained = str.split('').filter((item,index)=>{
    let indexFound = vowels.indexOf(item)
    if ( indexFound > -1 ) {
      vowelLocations.push([index]);
      return item;
    }
  })

  let spliceableArr = vowels;
  for ( let i = 0; i < vowelsContained.length; i++ ) {

    let neededVowels = vowels.filter((item)=>{
      if ( item !== vowelsContained[i] ){
        return item;
      }
    });
    vowelLocations[i].push(neededVowels)
  }

  for ( let i = 0; i < vowelLocations.length; i++ ) {
    let index = vowelLocations[i][0];

    for ( let j = 0; j < vowelLocations[i][1].length; j++ ) {
      let clone = lowerCaseStr.substr(0,index) + vowelLocations[i][1][j]
                  + lowerCaseStr.substr(index+1);
      output.push(clone);
    }
  }

  //return that whole array of permutations
  return output;
}

console.log("",wordGenerator('Pszczyna'))
console.log("",wordGenerator('aa'))
//[ 'aa',
//        'ae', 'ai', 'ao', 'au',
//  'ea', 'ee', 'ei', 'eo', 'eu',
//  'ia', 'ie', 'ii', 'io', 'iu',
//  'oa', 'oe', 'oi', 'oo', 'ou',
//  'ua', 'ue', 'ui', 'uo', 'uu'  ]

//above is what's expected
//below is what's delivered

// [ 'aa',
//
//   'ea',
//   'ia',
//   'oa',
//   'ua', 'ae', 'ai', 'ao', 'au' ]
console.log("",wordGenerator('b'))
