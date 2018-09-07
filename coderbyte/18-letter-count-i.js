// have the function LetterCountI(str) take the str parameter
// being passed and return the first word with the greatest
// number of repeated letters. For example: "Today, is the
// greatest day ever!" should return greatest because it has
// 2 e's (and 2 t's) and it comes before ever which also has
// 2 e's. If there are no words with repeating letters return
// -1. Words will be separated by spaces. 

// Correct Sample Output
// Input = "Hello apple pie"  ||  Output = "Hello"
// Input = "No words"         ||  Output = -1

function LetterCountI(str){
  var wordsAndLetters = {};   
  var count = 0;
  var finalWord;
  //splits str into array of individual words
  var wordArray = str.split(" ");
  //for-loop passing along the length of wordArray
  for ( var i = 0; i < wordArray.length; i++ ) {
    //populates wordsAndLetters object with wordArray elements as keys and value 0
    wordsAndLetters[wordArray[i]] = wordsAndLetters[wordArray[i]] || 0;
  }
  function countWordLetters(word) {
    //splits word argument into individual letters as strings
    var letterString = word.split("");
    var letterCount = {};
    //for-loop passing along the length of letterString array
    for ( var i = 0; i < letterString.length; i++ ) {
      //populates letterCount object with each unique letter, stringified, as keys and value 1;
      letterCount[letterString[i]] = letterCount[letterString[i]] || 0;
      //instances of the same letter increment value counter
      letterCount[letterString[i]]++;
    }
    return letterCount;
  }
  //for-in loop passing along each words in wordsAndLetters object
  for ( var words in wordsAndLetters ) {
    //sets wordsAndLetters keys equal to outcome of countWordLetters function with argument words
    wordsAndLetters[words] = countWordLetters(words);

    var highestLetterFrequency = wordsAndLetters[words];
    //for-in loop passing through each value in highestLetterFrequency
    for ( var values in highestLetterFrequency ) {
      //if values key in highestLetterFrequency object is greater than count
      if ( highestLetterFrequency[values] > count ) {
        //set count equal to values key in highestLetterFrequency
        count = highestLetterFrequency[values];
        //set finalWord 
        finalWord = words;
      }
    }
  }
  //if trivial case is NOT true
  if ( count !== 1 ) {
    return finalWord;
  }
  return -1
}