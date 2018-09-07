// don't think we have this specific prime kata on codewars, yet.
//
// It's really simple:
//
// Get the next prime number!
//
// You will get a number n (n>=0) and your task is to find the next prime number.
//
// e.g: nextPrime(5)=>7 || nextPrime(12)=>13
//
// Make sure to optimize your code. There will be huge numbers in the tests!


function nextPrime(n){
  if ( n === 0 || n === 1 ) {return 2}
  for ( let i = n; i < Math.pow(n,2); i++ ) {
    if ( n % i === 0 ) {
      return i;
    }
  }
}
// console.log(2,nextPrime(0));
// console.log(2,nextPrime(1));
// console.log(3,nextPrime(2));
console.log(5,nextPrime(3));
// console.log(7,nextPrime(5));
// console.log(13,nextPrime(11));
// console.log(19,nextPrime(17));
// console.log(2999,nextPrime(2971));
// console.log(nextPrime(2971), 2999);
