/*

  Non-repeated Character
    Given an arbitrary input string, return the first non-repeating character. 
    For strings with all repeats, return 'sorry'.

  Input	
  "ABCDBIRDUP"
  
  Output
  "A"
  
  Input	
  "XXXXXXX"	
  
  Output
  "sorry"
  
  Input	
  "ALABAMA"	
  
  Output
  "L"
  
  Input	
  "BABA"
  
  Output
  "sorry"
*/

//time complexity:  O(n)
//space complexity: O(1)
function firstNonRepeatedCharacter(string){
  let record = {};
  for ( let i = 0; i < string.length; i++ ) {
    if ( !record[string[i]] ) {
      record[string[i]] = 1;
    } else {
      record[string[i]]++;
    }
  }

  for ( let i = 0; i < string.length; i++ ) {
    if ( record[string[i]] === 1 ) {
      return string[i];
    }
  }

  return 'sorry'
}

console.log(firstNonRepeatedCharacter("ABCDBIRDUP"));
console.log(firstNonRepeatedCharacter("XXXXXXX"));
console.log(firstNonRepeatedCharacter("ALABAMA"));
console.log(firstNonRepeatedCharacter("BABA"));