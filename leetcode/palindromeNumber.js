// Determine whether an integer is a palindrome. 
//An integer is a palindrome when it reads the same backward as forward.

// function isPalindrome(number){
//   if ( number < 0 ) {
//     return false;
//   }

//   return Number(number.toString().split('').reverse().join('')) === number;
// }

// function isPalindrome(number){
//   if ( number < 0 ) {
//     return false;
//   }
//   let stringified = number.toString();
//   let result = '';
  
//   for ( let i = stringified.length-1; i>=0; i-- ) {
//     result += stringified[i];
//   }

//   output = parseInt(result);

//   return number === output;
// }

//time complexity O(n)
function isPalindrome(number){
  if ( number < 0 ) {
    return false;
  }
  let stringified = number.toString();
  let result = '';
  
  for ( let i = 0; i<stringified.length; i++ ) {
    if ( stringified[i] !== stringified[stringified.length-1-i]){
      return false;
    }
  }

  return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(1121));