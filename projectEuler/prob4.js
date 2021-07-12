// problem 4
{/* <p>A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.</p>
<p>Find the largest palindrome made from the product of two 3-digit numbers.</p> */}

// 906609 --> 913 * 993

function LargestPalindromeProduct(num){
  const columns = [];
  const rows = [];
  const matrix = [];

  let lowerBound = [1];
  let upperBound = [9];

  // set initial bounds
  for ( let i = 1; i < num; i++ ) {
    lowerBound.push(0);
    upperBound.push(9);
  }

  lowerBound = lowerBound.join('');
  upperBound = upperBound.join('');

  for ( let i = lowerBound; i <= upperBound; i++ ) {
    columns.push(i);
    rows.push(i);
  }

  columns.forEach((columnId)=>{
    rows.forEach((rowId)=>{
      matrix.push(columnId*rowId);
    });
  });

  const sorted = matrix.sort((a,b)=>b-a);
  for ( let i = 0; i < sorted.length; i++ ) {
    if ( isPalindrome(sorted[i]) ) {
      return sorted[i];
    }
  }

  function isPalindrome(number){
    const stringified = number.toString();
    const reverse = stringified.split('').reverse().join('');
    return stringified === reverse;
  }

}

module.exports = LargestPalindromeProduct;