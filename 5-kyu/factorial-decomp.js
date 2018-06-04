//second change
// The aim of the kata is to decompose n! (factorial n)
//into its prime factors.
//
// Examples:
//
// n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
// since 12! is divisible by 2 ten times, by 3 five times,
//by 5 two times and by 7 and 11 only once.
//
// n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"
//
// n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
// Prime numbers should be in increasing order.
//When the exponent of a prime is 1 don't put the exponent.
//
// Note
//
// the function is decomp(n) and should return the decomposition
//of n! into its prime factors in increasing order of the primes,
//as a string.
// factorial can be a very big number
//(4000! has 12674 digits, n will go from 300 to 4000).
// Translators are welcome for all languages.

function decomp(n) {
  let output = [];

  function calcFact(number){
    let arr = [];
    for ( let i = number; i > 0; i-- ) {
      arr.push(i);
    }

    return arr.reduce((a,b)=>{return a*b;})
  }

  let primeFactors = [];
  let factorial = findPrimeFactors(calcFact(n));
  // console.log("calcFact(n)",calcFact(n))


  function findPrimeFactors(number){
    console.log("number>>>",number);
    console.log("primeFactors",primeFactors)
    let match = null;
    if ( number <= 1 ) { return }
    for ( let i = 2; i <= number; i++ ) {
      console.log("this is i>>>",i);
      if ( number % i === 0 ) {
        primeFactors.push(i);
        match = i;
        break;
      }
    }
    return findPrimeFactors(number/match)
  }

  let counter = 1;
  primeFactors.forEach((factor,index)=>{
    if ( factor === primeFactors[index+1]){
      counter++;
    } else {
      if ( counter === 1 ) {
        output.push(factor)
      } else {
        output.push(factor.toString()+"^"+counter.toString())
      }
      counter = 1;
    }
  })
  return output.join(" * ");
}

// console.log("2^3 * 3 * 5 >>>>>",decomp(5))
// console.log("2^11 * 3^5 * 5^2 * 7^2 * 11 * 13 >>>>>",decomp(14))
// console.log("2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17 >>>>>",decomp(17))
// console.log("2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19 >>>>>",decomp(22))
console.log("2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23 >>>>>",decomp(25))

//this is my answer.  What's wrong??
//[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 5, 11]
// primeFactors.forEach((item)=>{
// 	if ( item === 2 ) {
// 		counter++;
//     }
// })
// console.log(counter);
// 36 ----> VM412:6
