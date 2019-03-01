/*
  Only Unique
    Given a string, remove any characters that are not unique from the string.

  Examples
    Input	
      str:"abccdefe"	
    Output
      "abdf"
  
    Input	
      str:"hello there"	
    
    Output
      "o tr"
    
    Input	
      str:"xyz"	
    
    Output
      "xyz"
    
    Input	
      str:"iiii"
    
    Output
      ""
*/

//time complexity is O(n*m) where n is the length of input string
//  and m is the total number of unique characters contained inside input string
//space complexity is O(m), where m is the total number of unique characters
function onlyUnique(str){
  let record = {};
  let output = '';

  for (let i = 0; i < str.length; i++) {
    if (!record[str[i]]) {
      record[str[i]] = 1;
    } else {
      record[str[i]]++;
    }
  }

  for (let key in record) {
    if (record[key] === 1) {
      output += key;
    }
  }
  return output;
}


console.log(onlyUnique("abccdefe"));
console.log(onlyUnique("hello there"));
console.log(onlyUnique("xyz"));
console.log(onlyUnique("iiii"));