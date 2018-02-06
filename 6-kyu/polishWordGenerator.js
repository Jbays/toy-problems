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
  let vowels = ['a','e','i','o','u'];
  let allNewWords = [];

  /**
   * @name: returnPerms
   * @description: returns all permutations of vowels array
   * @param1: vowel array
   * @param2: number of permutations required
   * @returns: array
   **/

  function returnPerms(array,number){
    let output = [];

    if ( number === 1 ) { return array; }

    array.forEach((vowelOne)=>{
      vowels.forEach((vowelTwo)=>{
        output.push(vowelOne+vowelTwo)
      })
    })
    return returnPerms(output,number-1);
  }

  let vowelLocation = [];

  lowerCaseStr.split('').forEach((letter,index)=>{
    if ( vowels.indexOf(letter) > -1 ) {
      vowelLocation.push(index);
    }
  });

  let allPerms = returnPerms(vowels,vowelLocation.length);
  let replaced = lowerCaseStr.replace(/[aeiou]/g,' ');
  allPerms.forEach((item,index)=>{
    let splitUp = replaced.split('');
    item.split('').forEach((letter,index)=>{
      splitUp[vowelLocation[index]] = letter;
    })

    allNewWords.push(splitUp.join(''));
  })

  return allNewWords;
}

// console.log("input: b >>>>>>>>",wordGenerator('b'))

// console.log("input: Pszcyna >>",wordGenerator('Pszczyna'))
// console.log("input: aPszcyn >>",wordGenerator('aPszczyn'))

// console.log("input: alo >>",wordGenerator('alo'))
// console.log("input: halo >>",wordGenerator('halo'))
// console.log("input: arbor >>",wordGenerator('arbor'))
// console.log("input: harbor >>",wordGenerator('harbor'))


// console.log("input: aaa >>",wordGenerator('aaa'))

// console.log("input: anaan >>>",wordGenerator('anaan'))
// console.log("input: lalana >>>",wordGenerator('lalana'))
// console.log("input: noion >>>",wordGenerator('noion'))
// console.log("input: aloha >>>",wordGenerator('aloha'))

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
