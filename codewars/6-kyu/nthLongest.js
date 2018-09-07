// https://www.codewars.com/kata/find-the-nth-longest-string-in-an-array/train/javascript

/*

  Implement the function longest(array,n) 
  where you will be given an array of strings and 
  then return the nth longest string in that array. 
  e.g. arr = ['Hello','World','Codewars','Katas'] n = 3; 
  should return 'World' because 'Codewars' length = 8 , 
  'Hello' length = 5, so that is the 2nd longest word and 
  then 'World' (although also word length of 5, 'World' is after 'Hello' in the array). 
  When words have the same lengths, 
  treat them in the order in which they exist in the array. 
  Array will never be empty and n > 0 always.

*/

function longest(arr,n){
  let originalArr = arr;
  // let originalArr = arr.slice(0);

  // let originalArr = arr.slice(0);
  let originalArr = arr.sort((a,b)=>{
    return b.length - a.length || arr.indexOf(a) - arr.indexOf(b)
  })  
  return originalArr[n-1]
}

console.log(longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'], 4))

// console.log(longest(['Hello', 'World', 'Codewars', 'Katas'], 3)=== 'World');
// console.log(longest(['Hello', 'World', 'Codewars', 'Katas'], 4)=== 'Katas');














// function longest(arr, n) {
//   let originalArr = arr.slice(0);
//   originalArr.sort((a,b)=>{
//     return b.length - a.length || arr.indexOf(a) - arr.indexOf(b);
//   })
//   return arr[n-1];
// }

//working!
// console.log(longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'], 4), 'aa');
// console.log(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'], 1), 'a');
// console.log(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l'], 1), 'a');


//Expected: 'qujtcwmsq', instead got: 'ntnyagtmh'
// console.log(longest(['eezul',
//   'mfq',
//   'qnbhaxjwkl',
//   'igfselihdau',
//   'qlfgewfw',
//   'ubfurwgqkkd',
//   'fcvv',
//   'lcljjpikfc',
//   'qujtcwmsq',
//   'ufomyue',
//   'wmqqbjm',
//   'keosozn',
//   'ntnyagtmh']
// ,11))

//Expected: 'jlufp', instead got: 'shryh'
// console.log(longest(
//   ['atebydymsy',
//   'go',
//   'jlufp',
//   'ckwvawv',
//   'wnaoxg',
//   'shryh',
//   'ytxjtsp',
//   'gyrrepjkt',
//   'ibmyfixkt',
//   'kjmayvcna',
//   'xbckvmruh',
//   'khujc',
//   'yofdyvyvqw',
//   'mhq',
//     'jb']
// ,11));

//   'atebydymsy',
//   'go',
//   'jlufp',
//   'ckwvawv',
//   'wnaoxg',
//   'shryh',
//   'ytxjtsp',
//   'gyrrepjkt',
//   'ibmyfixkt',
//   'kjmayvcna',
//   'xbckvmruh',
//   'khujc',
//   'yofdyvyvqw',
//   'mhq',
//   'jb'

// 'atebydymsy',
// 'yofdyvyvqw',
// 'gyrrepjkt',
// 'ibmyfixkt',
// 'kjmayvcna',
// 'xbckvmruh',
// 'ckwvawv',
// 'ytxjtsp',
// 'wnaoxg',
// 'jlufp',
// 'khujc',
// 'shryh',
// 'mhq',
// 'go',
// 'jb' ]