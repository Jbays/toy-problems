// have the function NumberSearch(str) take the str
// parameter, search for all the numbers in the string,
// add them together, then return that final number. For
// example: if str is "88Hello 3World!" the output should
// be 91. You will have to differentiate between single
// digit numbers and multiple digit numbers like in the
// example above. So "55Hello" and "5Hello 5" should return
// two different answers. Each string will contain at least
// one letter or symbol. 

// Correct Sample Output
// Input = "75Number9"           ||  Output = 84
// Input = "10 2One Number*1*"   ||  Output = 13

function NumberAddition(str) {
  var summableArray = [];
  //replaces all non-digits with space-characters
  var replacer = str.replace(/\D/g, " ");
  //removes space-characters and wraps all replacer elements in quotes
  var splitter = replacer.split(" ");
  //removes all empty-string elements in splitter array
  var filtered = splitter.filter(Boolean);
  //for-loop passing along the length of filtered array
  for ( var i = 0; i < filtered.length; i++ ) {
    //numberifies elements in filtered array and pushes into output array
    summableArray.push(Number(filtered[i]));
  }
  //calculates sum of output array
  var sum = summableArray.reduce(function(a,b){ return a+b});
  return sum;
}