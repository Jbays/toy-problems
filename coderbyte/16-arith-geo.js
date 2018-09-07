// have the function ArithGeo(arr) take the array of numbers
// stored in arr and return the string "Arithmetic" if the
// sequence follows an arithmetic pattern or return "Geometric"
// if it follows a geometric pattern. If the sequence doesn't
// follow either pattern return -1. An arithmetic sequence
// is one where the difference between each of the numbers is
// consistent, where as in a geometric sequence, each term
// after the first is multiplied by some constant or common
// ratio. Arithmetic example: [2, 4, 6, 8] and Geometric
// example: [2, 6, 18, 54]. Negative numbers may be entered as
// parameters, 0 will not be entered, and no array will contain
// all the same elements. 

// Correct Sample Output
// Input = 5,10,15     ||  Output = "Arithmetic"
// Input = 2,4,16,24   ||  Output = -1

function ArithGeo(arr) {

  //first set boolean flags to false
  var arithCheck = false;
  var geoCheck = false;

  var checker = function(arr) {

    //will hold the differences between elements in the initial arr argument
    var diff = [];
    //will hold the quotients between elements in the initial arr argument
    var quotient = [];
    var arrEnd = arr.length-1;

    //for-loop passing from diff array's end to its beginning
    for ( var i = arrEnd; i > 0; i-- ) {
      //populating diff array with
      //the difference (arr[i] - arr[i-1])
      diff.push(arr[i]-arr[i-1]);
    }

    //for-loop passing from quotient array's end to its beginning
    for ( var i = arrEnd; i > 0; i-- ) {
      //populating quotient array with
      //the quotient (arr[i] / arr[i-1])
      quotient.push(arr[i]/arr[i-1]);
    }

    //checks if all the elements in a given array are identical
    var allTheSame = function(arr) {
      //defines first element in arr
      var first = arr[0];
      //checks if each element in arr argument
      return arr.every(function(element) {
        //is equal to the first element in arr argument
        return element === first;
      });
    };

    //if differences are all the same
    if ( allTheSame(diff) === true ) {
      //series in initial arr argument is arithemtic
      arithCheck = true;
    } else
    // quotients are all the same
    if ( allTheSame(quotient) === true ) {
      //series in initial arr argument is geometric
      geoCheck = true;
    }
  }
  //run checker function
  checker(arr);

  //if arithCheck is true
  if ( arithCheck === true ) {
    return "Arithmetic"
  } else 
  //if geoCheck is true
  if ( geoCheck === true ) {
    return "Geometric"
  } 
  //else neither of them are true
  else {
    return -1;
  }
}