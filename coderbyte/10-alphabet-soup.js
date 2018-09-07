// Have the function AlphabetSoup(str) take the str
// string parameter being passed and return the string
// with the letters in alphabetical order (ie. hello
//   becomes ehllo). Assume numbers and punctuation
// symbols will not be included in the string.

// Correct Sample Outputs
// Input = "coderbyte" ||  Output = "bcdeeorty"
// Input = "hooplah"   ||  Output = "ahhloop"

function AlphabetSoup(str) { 
  //wraps in quotes each letter in str argument and puts in array 
  return str.split("")
  //sorts each letter according to its Unicode code point value
            .sort()
  //rejoins arrayified str          
            .join("");
}