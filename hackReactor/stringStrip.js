/*
  String Strip
    Write a function that removes a given character from both ends of a given string. 
    If no character is given, then strip spaces instead.
*/
 
function strip(str,character){
  let outputArr = str.split('');
  let recurseAgain = false;

  if ( character.length === 0 ) {
    character = ' ';
  }
  
  if ( outputArr[0] === character ) {
    outputArr.shift();
    recurseAgain = true;
  }
  
  if ( outputArr[outputArr.length-1] === character ) {
    outputArr.pop();
    recurseAgain = true;
  }

  if ( recurseAgain ) {
    return strip(outputArr.join(''),character);
  }
  console.log('outputArr',outputArr);
  return outputArr.join('');
}
// console.log(strip('abc','c')) //=> 'ab'
// console.log(strip('abc','a')) //=> 'bc'
// console.log(strip('aba','a')) //=> 'b'
// console.log(strip('__X_X_', '_')) //=> 'X_X'
console.log(strip('hello ', ' ')) //=> 'X_X'
// console.log(strip('hello ', '')) //=> 'X_X'