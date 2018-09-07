// In this Kata, you will implement The Luhn Algorithm,
//which is used to help validate credit card numbers.
//
// Given a positive integer of up to 16 digits,
//return true if it is a valid credit card number, and false if it is not.
//
// Here is the algorithm:
//
// If there are an even number of digits,
//double every other digit starting with the first,
//and if there are an odd number of digits,
//double every other digit starting with the second.
//Another way to think about it is, from the right to left,
//double every other digit starting with the second to last digit.
//
// 1714 => [1*, 7, 1*, 4] => [2, 7, 2, 4]
//
// 12345 => [1, 2*, 3, 4*, 5] => [1, 4, 3, 8, 5]
//
// 891 => [8, 9*, 1] => [8, 18, 1]
// If a resulting doubled number is greater than 9,
//replace it with either the sum of it's own digits, or 9 subtracted from it.
//
// [8, 18*, 1] => [8, (1+8), 1] => [8, 9, 1]
//
// (or)
//
// [8, 18*, 1] => [8, (18-9), 1] => [8, 9, 1]
// Sum all of the final digits
//
//  [8, 9, 1] => 8+9+1 => 18
// Finally, take that sum and divide it by 10.
//If the remainder equals zero, the original credit card number is valid.
//
//  18 (modulus) 10 => 8.
//
//  8 does not equal 0, so 891 is not a valid credit card number.

function validate(n){
  let isEven = n.toString().length % 2 === 0;
  // console.log("isEven",isEven)

  let doubled = n.toString().split('').map((item,index)=>{
    let doubleItem = 2*item;
    // console.log('item>>',item);
    if ( isEven ) {
      if ( index % 2 === 0 ) {
        //if double value is double-digit,
        return (doubleItem.toString().length > 1) ? doubleItem - 9 : doubleItem;
      } else {
        return item;
      }
    } else {
      if ( index % 2 === 1 ) {
        return (doubleItem.toString().length > 1) ? doubleItem - 9 : doubleItem;
      } else {
        return item;
      }
    }
  })

  // console.log("doubled",doubled)
  let sum = doubled.reduce((a,b)=>{return parseInt(a)+parseInt(b)})
  console.log("sum",sum)

  return sum % 10 === 0
}

console.log("false - 1234 >>>>>>>>>>>>",validate(1234))
console.log("false - 12345 >>>>>>>>>>>",validate(12345))
console.log("false - 123456 >>>>>>>>>>",validate(123456))
console.log("false - 1234567 >>>>>>>>>",validate(1234567))
console.log("false - 12345678 >>>>>>>>",validate(12345678))
console.log("false - 123456789 >>>>>>>",validate(123456789))
console.log("false - 1234567891 >>>>>>",validate(1234567891))
console.log("false - 12345678910 >>>>>",validate(12345678910))
console.log("false - 123456789101 >>>>",validate(123456789101))
console.log("false - 1234567891011 >>>",validate(1234567891011))
console.log("false - 12345678910111 >>",validate(12345678910111))
console.log("false - 123456789101112 >",validate(123456789101112))
console.log("false - 1234567891011123",validate(1234567891011123))
