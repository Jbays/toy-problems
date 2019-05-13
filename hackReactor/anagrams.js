/*

  Anagrams
    Given two strings, return true if one string is an anagram of another.

*/


//time complexity --> O(n*m) where n is the length of a and m is the length of b
//space complexity --> O(n+m)
function isAnagram(a,b){
  if ( b.length > a.length ) {
    let temp = a;
    a = b;
    b = temp;
  }

  let aCopy = a.replace(' ','');
  let bCopy = b.replace(' ','');

  for ( let i = 0; i < a.length; i++ ) {
    if ( bCopy.includes(a[i]) ) {
      bCopy = bCopy.replace(a[i],'');
      aCopy = aCopy.replace(a[i],'');
    }
  }

  if ( aCopy.length === 0 && bCopy.length === 0 ) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram('silent','listen')); //true
console.log(isAnagram('torchwood','doctor who')); //true
console.log(isAnagram('why?','why not?')); //false
console.log(isAnagram('admirer','eri6rdma')); //false

//NOTE: another solution is to sort the two strings first.  then check if they're exactly identical.