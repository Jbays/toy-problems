// have the function VowelCount(str) take the str string
// parameter being passed and return the number of vowels
// the string contains (ie. "All cows eat grass" would
// return 5). Do not count y as a vowel for this challenge. 

// Correct Sample Output
// Input = "hello"     ||  Output = 2
// Input = "coderbyte" ||  Output = 3

function VowelCount(str) { 
  //splits str argument into array of stringified letters
  var arrayOfLetters = str.split(""); 
  //sets counter equal to zero
  var vowelCounter = 0;
  //for-loop passing through length of str argument
  for ( var i = 0; i < str.length; i ++ ) {
    //if letter in array is an 'a', 'e', 'i', 'o' or 'u'
    if ( str[i] === 'a' || 
         str[i] === 'e' ||
         str[i] === 'i' ||
         str[i] === 'o' ||
         str[i] === 'u') {
      //increment counter
      vowelCounter++;
    }
  }
  //output number of vowels counted in str argument
  return vowelCounter;
}