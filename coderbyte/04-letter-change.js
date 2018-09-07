// Have the function LetterChanges(str) take the str parameter
// being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following
// it in the alphabet (ie. c becomes d, z becomes a). Then
// capitalize every vowel in this new string (a, e, i, o, u)
// and finally return this modified string.

// Correct Sample Outputs
// Input = "hello*3"     ||  Output = "Ifmmp*3"
// Input = "fun times!"  ||  Output = "gvO Ujnft!"

//old solution -- can't make any sense of it.
// function LetterChanges(str) { 
//   var alphabet = "abcdefghijklmnopqrstuvwxyz";
//   var newStr = "";
//   var loc = 0;
//   for (var i = 0; i < str.length; i++) {
//     loc = alphabet.indexOf(str[i]);
//     if (loc === 25) {
//       newStr = newStr + "a";
//     } else if (loc === -1) {
//       newStr = newStr + str[i];
//     } else {          
//       newStr = newStr + alphabet[loc + 1];
//     }
//   }
//   return newStr.replace(/[aeiou]/g, function(letter) {return letter.toUpperCase()});        
// }

//much cleaner solution
function LetterChanges(str) { 
  //empty string
  var newString = "";

  //for-loop passing through the string's length
  for (var i = 0; i < str.length; i++) {

    //var character = the letter at a given index
    var character = str.charAt(i);

    //if character has matches ranging from (A-Z || a-z) 
    if (character.match(/[A-Za-z]/) != null)

      //shifts character's charCode by +1
      character = String.fromCharCode(character.charCodeAt(0)+1);

    //adds the newly shifted character to the empty string
    newString += character;
  }
  //splits newly-populated string on lowercase vowels and substitutes them with their uppercase
  newString = newString.split("a").join("A")
    .split("e").join("E")
    .split("i").join("I")
    .split("o").join("O")
    .split("u").join("U");

  return newString; 
}
