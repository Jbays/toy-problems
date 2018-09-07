// https://www.codewars.com/kata/vowel-count

// Return the number(count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and / or spaces.

function getCount(str) {
  let vowelsCount = 0;
  const vowels = 'aeiou';

  str.split('').forEach((letter)=>{
    console.log('letter',letter)
    if ( vowels.indexOf(letter) > -1 ){
      vowelsCount++;
    }
  })

  return vowelsCount;
}

// console.log(getCount("abracadabra"), 5);
console.log(getCount("pear tree"), 4);