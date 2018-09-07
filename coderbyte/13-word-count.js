// Using the JavaScript language, have the function WordCount(str)
// take the str string parameter being passed and return the number
// of words the string contains (ie. "Never eat shredded wheat"
// would return 4). Words will be separated by single spaces. 

// Correct Sample Output
// Input = "Hello World"   ||  Output = 2
// Input = "one 22 three"  ||  Output = 3

function WordCount(str) { 

  //splits the str argument into an array of individual words
  //whose length is equal to the total word count
  return str.split(" ").length; 
         
}