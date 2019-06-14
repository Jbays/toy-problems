/*

  You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

  For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candles are of height  and there are  such candles.

  Function Description

  Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

  birthdayCakeCandles has the following parameter(s):

  ar: an array of integers representing candle heights
  Input Format

  The first line contains a single integer, , denoting the number of candles on the cake. 
  The second line contains  space-separated integers, where each integer  describes the height of candle .

  Constraints

  Output Format

  Print the number of candles that can be blown out on a new line.

  Sample Input 0
  4
  3 2 1 3

  Sample Output 0
  2

  Explanation 0
  We have one candle of height , one candle of height , and two candles of height . Your niece only blows out the tallest candles, meaning the candles where . Because there are  such candles, we print  on a new line.
*/

function birthdayCakeCandles(ar){
  let count = 0;
  let max = Math.max(...ar);
  for ( let i = 0; i < ar.length; i++ ) {
    if ( ar[i] === max ) {
      count++;
    }
  }
  return count;
}

console.log(birthdayCakeCandles([3,2,1,3])); //=>2
console.log(birthdayCakeCandles([4,2,1])); //=> 1
console.log(birthdayCakeCandles([9,2,9,9,9])); //=> 4