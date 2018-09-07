// Have the function ABCheck(str) take the str parameter
// being passed and return the string true if the characters
// a and b are separated by exactly 3 places anywhere in the
// string at least once (ie. "lane borrowed" would result in
// true because there is exactly three characters between a
// and b). Otherwise return the string false. 

// Correct Sample Output
// Input = "after badly"  ||  Output = "false"
// Input = "Laura sobs"   ||  Output = "true"

function ABCheck(str) { 
  //sets detector logic to false
  var passes = false;
  //for-loop passing through the length of the str argument
  for ( var i = 0; i < str.length; i++ ) {
    //if str[i] character is "a"
    if ( str.charAt(i).toLowerCase() === "a" ) {
      //if str[i+4] character is "b"
      if ( str.charAt(i+4).toLowerCase() === "b" ) {
        //when "b" detected, set detector to true
        passes = true;
      }
    }
  }
  //return detector
  return passes;     
}