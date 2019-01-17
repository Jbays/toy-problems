/*
  https://www.codewars.com/kata/gap-in-primes/train/javascript

  The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

  A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

  We will write a function gap with parameters:

  g (integer >= 2) which indicates the gap we are looking for

  m (integer > 2) which gives the start of the search (m inclusive)

  n (integer >= m) which gives the end of the search (n inclusive)

  In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

  So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise nil or null or None or Nothing (depending on the language).

  In C++ return in such a case {0, 0}. In F# return [||]. In Kotlin return []

  #Examples: gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}

  gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin return[]`

  gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

  ([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)

  gap(6,100,110) --> nil or {0, 0} : between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap because there is 103in between and 103-109is not a 6-gap because there is 107in between.

  Note for Go
  For Go: nil slice is expected when there are no gap between m and n. Example: gap(11,30000,100000) --> nil

*/

// function gap(g, m, n) {
//   let allPrimes = []
//   for ( let i = m; i <= n; i++ ){
//     if ( numIsPrime(i) ) {
//       allPrimes.push(i);
//     }
//   }

//   // console.log('allPrimes',allPrimes);

//   for ( let i = 0; i < allPrimes.length-1; i++ ) {
//     for ( let j = i+1; j < allPrimes.length-1; j++ ) {
//       if ( allPrimes[j] - allPrimes[i] === g && j-i === 1 ) {
//         return [allPrimes[i],allPrimes[j]];
//       }
//     }
//   }

//   return null;

//   function numIsPrime(number){
//     for ( let i = 2; i < Math.sqrt(number)+1; i++ ) {
//       if ( number % i === 0 ) {
//         return false;
//       }
//     }
    
//     return true;
//   }
// }

function gap(g,m,n){
  // console.log('this is g',g)
  // console.log('this is m',m)
  // console.log('this is n',n)

  for ( let i = m; i <= n; i++ ) {
    //check if a number is prime
    if ( numIsPrime(i) ) {
      
      //checks that there is a prime at the appropriate gap
      if ( numIsPrime(i+g) ) {
        // console.log('i >>>>>>>>>>>>',i)
        // console.log('i+g >>>>>>>>>>',i+g)

        //now double-check that no other primes were skipped

        let skippedPrimes = false;

        for ( let j = i+1; j < i+g && j < n; j++ ) {
          // console.log('this is j',j);
          if ( numIsPrime(j) ) {
            // console.log('j is a prime!')
            skippedPrimes = true;
          }
        }


        if ( !skippedPrimes ){
          return [i,i+g]
        }

      }
      
    }
  }


  function numIsPrime(number){
    if ( number % 2 === 0 ){
      return false
    }

    for ( let i = 3; i <= Math.sqrt(number)+1; i+=2 ) {
      if ( number % i === 0 ) {
        return false;
      }
    }

    return true;
  }

  return null;
}

// console.log(gap(2, 100, 110), [101, 103]);
// console.log(gap(4, 100, 110), [103, 107]);
// console.log(gap(6, 100, 110), null);
// console.log(gap(8, 300, 400), [359, 367]);
// console.log(gap(10, 300, 400), [337, 347]);


