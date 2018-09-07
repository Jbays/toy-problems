// have the function SwapCase(str) take the str
// parameter and swap the case of each character.
// For example: if str is "Hello World" the output
// should be hELLO wORLD. Let numbers and symbols
// stay the way they are.

// Correct Sample Output
// Input = "Hello-LOL"    ||  Output = "hELLO-lol"
// Input = "Sup DUDE!!?"  ||  Output = "sUP dude!!?"

function SwapCase(str) { 
  var caseSwapped = "";
  //for-loop passing through str argument's length
  for ( var i = 0; i < str.length; i++ ) {
    //if character at str[i] is uppercase
    if ( str[i] === str[i].toUpperCase() ) {
      //change to lowercase and add to output string
      caseSwapped += str[i].toLowerCase();
    }
    //if character at str[i] is lowercase
    else if ( str[i] === str[i].toLowerCase() ) {
      //change to uppercase and add to output string
      caseSwapped += str[i].toUpperCase();
    }
    //else str[i] character is not in alphabet
    else {
      //so add to output string
      caseSwapped += str[i];
    }
  }
  return caseSwapped;     
}