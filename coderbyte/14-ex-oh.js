// have the function ExOh(str) take the str parameter being
// passed and return the string true if there is an equal
// number of x's and o's, otherwise return the string false.
// Only these two letters will be entered in the string, no
// punctuation or numbers. For example: if str is "xooxxxxooxo"
// then the output should return false because there are
// 6 x's and 5 o's. 

// Correct Sample Output
// Input = "xooxxo"  ||  Output = "true"
// Input = "x"       ||  Output = "false"

function ExOh(str) { 
  //counter for "o"
  var countOs = 0;
  //counter for "x"
  var countXs = 0;
  //arrayifies string and quote-wraps each individual letter  
  var stringifiedXOs = str.split("");
  //for-loop passing along the length of stringifiedXOs
  for ( var i = 0; i < stringifiedXOs.length; i++ ) {
    //if letter at index i is an "x"
    if ( stringifiedXOs[i] === "x" ) {
      //increment x-counter
      countXs++;
    }
    //else letter must be an "o"
    else
    {
      //therefore increment o-counter
      countOs++;
    }
  }
  //if o-counter is equal to x-counter
  if ( countOs === countXs ) {
    return true;
  }
  // o-counter is NOT equal to x-counter
  else
  {
    return false;
  }
}