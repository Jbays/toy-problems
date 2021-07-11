// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?
// 6857

function LargestPrimeFactor(num){
  let primeNumbers = new Set();
  primeNumbers.add(2);
  let primeFactorsOfParam = [2];
  
  for (let i = 3; i < Math.sqrt(num); i++ ) {
    if ( isPrimeNumber(i) ) {
      primeNumbers.add(i);
      if ( num % i === 0 ) {
        primeFactorsOfParam.push(i);
      }
    }
  }

  function isPrimeNumber(number){
    let isPrime = false;
    for ( let i = 2; i <= Math.sqrt(number); i++ ) {
      if ( number % i === 0 ) return isPrime;
    }
    return true;
  }

  return primeFactorsOfParam;
}


module.exports = LargestPrimeFactor;