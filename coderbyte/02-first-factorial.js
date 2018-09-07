// Have the function FirstFactorial(num) take the num parameter being passed
// and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)).
// For the test cases, the range will be between 1 and 18. 

// Correct Sample Outputs
// Input = 4  ||  Output = 24
// Input = 8  ||  Output = 40320

function FirstFactorial(num) {
  //base case -- will stop recursion when num === 0 
  if ( num === 0 ) {
    return 1;
  } else {
    //multiplies num by (num-1)
    return num * FirstFactorial(num-1);
  }
}
