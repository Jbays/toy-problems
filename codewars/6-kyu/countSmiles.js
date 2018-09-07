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

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;

  arr.forEach((faceString)=>{
    let eyes = false;
    let mouth = false;
    let faceInvalid = false;
    let splitFace = faceString.split('').slice(0,3);

    //handles the simplest case
    if ( splitFace.length === 2 ) {
      splitFace.forEach((faceSymbol)=>{
        if ( faceSymbol === ";" ||
             faceSymbol === ":" ){
          eyes = true;
        }

        if ( faceSymbol === ")" ||
             faceSymbol === "D" ){
          mouth = true;
        }
      })
      if ( eyes && mouth ) count++;
    } else if ( splitFace.length === 3 ) {
      //handle the specific case for three-symbol faces
        if ( splitFace[0] === ";" ||
             splitFace[0] === ":" ){
          eyes = true;
        }

        if ( splitFace[1] === "-" ||
             splitFace[1] === "~" ){
          nose = true;
        } else {
          faceInvalid = true;
        }

        if ( splitFace[2] === ")" ||
             splitFace[2] === "D" ){
          mouth = true;
        }

        if ( !faceInvalid && eyes && mouth ) count++;
    }
  })
  return count;
}
