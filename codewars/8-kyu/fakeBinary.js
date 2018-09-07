// https://www.codewars.com/kata/fake-binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string.

function fakeBin(string){
  return string.split('').map((letter)=>{
    return parseInt(letter) >= 5 ? '1' : '0';
  }).join('');
}

console.log(fakeBin('45385593107843568'), '01011110001100111');