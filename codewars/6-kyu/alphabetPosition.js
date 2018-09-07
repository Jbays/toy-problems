// Welcome. In this kata you are required to, given a string,
// replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it
//and don't return it. a being 1, b being 2, etc. As an example:

var alphabetObj = {
  a:1,
  b:2,
  c:3,
  d:4,
  e:5,
  f:6,
  g:7,
  h:8,
  i:9,
  j:10,
  k:11,
  l:12,
  m:13,
  n:14,
  o:15,
  p:16,
  q:17,
  r:18,
  s:19,
  t:20,
  u:21,
  v:22,
  w:23,
  x:24,
  y:25,
  z:26,
}

var allLetters = Object.keys(alphabetObj);

function alphabet_position(string){
  let outputArr = []
  var eachWord = string.split(' ');
  eachWord.forEach(function(word){

    let eachLetter = word.split('');
    var donut = eachLetter.map(function(letter){
      letter = letter.toLowerCase().replace(/[^a-z]/gi,'');

      //if letter is truthy AND letter is found in allLetters
      console.log("this is letter>",typeof letter);
      console.log("this is letter>",letter);
      console.log("this is letter>",letter.length);
      if (!!letter && allLetters.indexOf(letter) > -1){
        return alphabetObj[letter];
      }
    })

    console.log("this is donut>>",donut);
  })
  // console.log('this is mapped>>',mapped);

  // console.log("this is each word>>",eachWord);
  // string.forEach(function(letter){
  //   console.log("this is a letter>>>",letter);
  // })
}

alphabet_position("The sunset sets at twelve o' clock.")
