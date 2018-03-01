// https://www.codewars.com/kata/century-from-year/train/javascript

// Given a year, return the century it is in.
//
// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.
//
// Let's see some examples:
//
// centuryFromYear(1705) // returns 18
// centuryFromYear(1900) // returns 19
// centuryFromYear(1601) // returns 17
// centuryFromYear(2000) // returns 20
// Hope you enjoy it .. Awaiting for Best Practice Codes hahaha ..
//
// Enjoy Learning !!!

function century(year) {
  if ( year <= 100 ) { return 1; }
  let arr = year.toString().split('');

  let firstYearDigits = "";
  for ( let i = 0; i < arr.length-2; i++ ) {
    firstYearDigits += arr[i];
  }

  return ( parseInt(arr[arr.length-1]) > 0 || parseInt(arr[arr.length-2]) > 0 ) ? parseInt(firstYearDigits)+1 : parseInt(firstYearDigits)
}

// console.log(century(874))
// console.log(century(1705))
// console.log(century(508))
// console.log(century(142))
// console.log(century(836))
// console.log(century(439))
// console.log(century(1900))
// console.log(century(1601))
// console.log(century(2000))
console.log(century(7960))
