/*

  Character Sum
    Given a string of arbitrary size, convert each character into its integer equivalent and sum the entirety.

    Input	
      str:"123"
    Output
      6
    
    Input	
      str:"0101"	
    Output
      2
    
    Input	
    Output
    str:"so cool!!1!"	
    1

*/

function characterSums(string){
  let sum = 0;

  for ( let i = 0; i < string.length; i++ ) {
    let potentialNum = parseInt(string[i]);
    if ( potentialNum ){
      sum += potentialNum;
    }
  }

  return sum;
}

console.log(characterSums('123'))
console.log(characterSums('0101'))
console.log(characterSums('socool!!1!'))