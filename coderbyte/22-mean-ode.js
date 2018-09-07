// have the function MeanMode(arr) take the array of numbers
// stored in arr and return 1 if the mode equals the mean, 0
// if they don't equal each other (ie. [5, 3, 3, 3, 1] should
// return 1 because the mode (3) equals the mean (3)). The
// array will not be empty, will only contain positive integers,
// and will not contain more than one mode. 

// Correct Sample Output
// Input = [1, 2, 3, 100]    ||  Output = 0
// Input = [4, 4, 4, 6, 2]   ||  Output = 1

function MeanMode(arr) { 
  
  var modeHolder = {};
  var modeCount = 0;
  var mode = 0;
  //calculates mean for arr argument
  var mean = arr.reduce(function(a,b){return a+b})/arr.length;
  
  //for-loop passing along the length of arr argument
  for (var i = 0; i < arr.length; i++) {
    //if modeHolder has a value at a given arr's index
    if ( modeHolder[arr[i]] ) {
      //increment the value
      modeHolder[arr[i]]++;
    }
    else {
      //else set key's value equal to 1
      modeHolder[arr[i]] = 1;
    }
  }
  
  for (var key in modeHolder) {
    //if modeHolder's key is greater than modeCount
    if(modeHolder[key] > modeCount) {
      //set modeCount equal to modeHolder's key
      modeCount = modeHolder[key];
      //set mode equal to a integer-ized string value
      mode = parseInt(key);
    }
  }
  
  //if mode is exactly equal to mean
  if (mode === mean) {
    //as specified by the toy problem
    return 1;
  } else {
    return 0;
  }
}