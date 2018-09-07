// have the function SecondGreatLow(arr) take the array of
// numbers stored in arr and return the second lowest and
// second greatest numbers, respectively, separated by a
// space. For example: if arr contains [7, 7, 12, 98, 106]
// the output should be 12 98. The array will not be empty
// and will contain at least 2 numbers. It can get tricky
// if there's just two numbers! 

// Correct Sample Output
// Input = 1, 42, 42, 180  ||  Output = "42 42"
// Input = 4, 90           ||  Output = "90 4"

function SecondGreatLow(arr) { 

  //trivial case - if arr argument has only two elements
  if ( arr.length === 2 ) {
    //convert arr into string
    return arr.join(" ");
  }

  var output = [];
  //sorts arr argument from least to greatest
  var sorted = arr.sort(function(a,b){return a-b});

  //removes first element from sorted
  var firstGuy = sorted.shift();
  //if firstGuy IS the first element in sorted
  if ( firstGuy === sorted[0] ) {
    //then push second element into output array
    output.push(sorted.slice(1,2));
  } else {
    //else push first element into output array
    output.push(sorted.slice(0,1));
  }

  //removes last element from sorted
  var lastGuy = sorted.pop();
  //if lastGuy IS the last element in sorted
  if ( lastGuy === sorted[sorted.length-1] ) {
    //push sorted's second-to-the-last element into output array
    output.push(sorted.slice(sorted.length-3, sorted.length-2));
  } else {
    //else push sorted's last element
    output.push(sorted.pop());
  }
  //stringify then return output array
  return output.join(" ");
}