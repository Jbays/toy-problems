// Description:
// Given an array (arr) as an argument complete the
// function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]
//
// Example cases:
//
// console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
// console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;

// these are all the tests not working
// Expected: 2, instead got: 5
// Testing for: ;~) , :> , :o) , ;~> , ;o> , :D , :>
// Expected: 2, instead got: 3
// Testing for: :D , ;) , :~) , ;-) , ;> , :( , :>
// Expected: 3, instead got: 4
// Testing for: :-> , :-) , :o) , :-> , :~D , :o> , :oD
// Expected: 2, instead got: 4
// Testing for: :~> , ;~) , :> , ;~( , ;) , :o( , :oD
// Expected: 2, instead got: 3
// Testing for: ;-) , :D , :( , ;oD , :D , :o> , :o>
// Expected: 3, instead got: 4
// Testing for: :D , :) , ;) , ;) , :~( , :( , ;~)
// Expected: 3, instead got: 5
// Testing for: ;> , ;) , :~> , ;) , ;oD , :> , :>
// Expected: 2, instead got: 3
// Testing for: ;~D , :) , ;D , :( , ;D , ;~> , :)


//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;

  arr.forEach((faceString)=>{
    let eyes = false;
    let nose = false;
    let mouth = false;
    let splitFace = faceString.split('');

    splitFace.forEach((singleFaceSymbol)=>{
      if ( singleFaceSymbol === ";" ||
           singleFaceSymbol === ":" ){
        eyes = true;
      }

      if ( singleFaceSymbol === "-" ||
           singleFaceSymbol === "~" ){
        nose = true;
      }

      if ( singleFaceSymbol === ")" ||
           singleFaceSymbol === "D" ){
        mouth = true;
      }
    })

    if ( eyes && nose && mouth ) {
      count++;
    }
  })

  return count;
}
