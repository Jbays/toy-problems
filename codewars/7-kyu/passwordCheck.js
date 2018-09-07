// https://www.codewars.com/kata/password-check-binary-to-string/train/javascript

// Write a script that takes an array of possible passwords 
//and a string of binary representing the possible password.
//Convert the binary to a string and compare to the password array.
// If the password is found, return the password string, else return false;

function decodePass(arr,string){
  let possibleWord = string.split(' ').map((binaryLetter)=>{
    return String.fromCharCode('0b'+binaryLetter);
  }).join('')

  // console.log('this is possibleWord',possibleWord);
  if (arr.indexOf(possibleWord) > -1 ) {
    return arr[arr.indexOf(possibleWord)]
  }
  return false;
}

console.log(decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011'), 'password123');