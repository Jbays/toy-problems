// Have the function TimeConvert(num) take the num parameter
// being passed and return the number of hours and minutes
// the parameter converts to (ie. if num = 63 then the output
//   should be 1:3). Separate the number of hours and minutes
// with a colon.

// Correct Sample Outputs
// Input = 126  ||  Output = "2:6"
// Input = 45   ||  Output = "0:45"

function TimeConvert(num) {
  //divides num argument by 60, rounding down 
  var hours = Math.floor(num / 60);
  //assigns var minutes to remainder of num argument divided by 60
  var minutes = num % 60;
  //returns output in specified form
  return hours + ":" + minutes;
}