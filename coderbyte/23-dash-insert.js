// have the function DashInsert(str) insert dashes ('-')
// between each two odd numbers in str. For example: if
// str is 454793 the output should be 4547-9-3. Don't
// count zero as an odd number. 

// Correct Sample Output
// Input = 99946   ||  Output = 9-9-946
// Input = 56730   ||  Output = 567-30

function DashInsert(str) { 
  //stringifies integer argument
  var stringify = str.toString();
  //empty string for output
  var output = "";
  //for-loop passing through the length of the stringified argument
  for ( var i = 0; i < stringify.length; i++ ) {
    //if BOTH stringify[i] is odd AND the its preceeding number is ALSO odd
    if ( (stringify[i] % 2 === 1) && (stringify[i - 1] % 2 === 1) ) {
      //add a dash between those numbers
      output += "-";
    }
    //then add the modified string to the output
    output += stringify[i];
  }
  return output
}
