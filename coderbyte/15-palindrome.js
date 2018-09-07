// have the function Palindrome(str) take the str parameter
// being passed and return the string true if the parameter
// is a palindrome, (the string is the same forward as it is
// backward) otherwise return the string false. For example:
// "racecar" is also "racecar" backwards. Punctuation and
// numbers will not be part of the string. 

// Correct Sample Output
// Input = "never odd or even"   ||  Output = "true"
// Input = "eye"                 ||  Output = "true"

function Palindrome(str) {
  //.replace removes any white space characters from str argument
  var nonPalindromize = str.replace(/\s/g, '');
  //removes any white space characters from str argument
  var palindromize = str.replace(/\s/g, '')
  //arrayifies and individually quote-wraps each letter in the string 
                          .split("")
  //reverses order of individual letters
                          .reverse()
  //rejoins individual letters into one string
                          .join("");

  //if palindromize is exactly equal to the initial str argument       
  if ( nonPalindromize === palindromize ) {
    //true
    return true;
  } else {
    //false
    return false;
  }
}