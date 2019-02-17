/*

  Question 2: Look and Say
  Implement a function that outputs the Look and Say sequence:
    1 
    11
    21
    1211
    111221
    312211
    13112221
    1113213211
    31131211131221
    13211311123113112211
  
  Solution
  This problem is fairly straightforward and should not take a long time to solve. 
  However, be sure you do proper error checking of the input first! 
  (Empty and invalid inputs should be taken into account). 
  
  Additionally, you can ask yourself:
  
    How does the ouput length scale?
    What is the max single digit that can exist in the output?
    What is the only starting sequence that never grows in length?

*/

function lookAndSay(string){
  let outputQueue = [];
  let lastChar = string[0];
  let count = 1;
  for ( let i = 1 ; i <= string.length; i++ ) {
    if ( string[i] === lastChar ) {
      count++;
    } else {
      outputQueue.push(count,parseInt(lastChar));
      lastChar = string[i];
      count = 1;
    }
  }

  return outputQueue;
}

// console.log(lookAndSay('1'));
// console.log(lookAndSay('11'));
// console.log(lookAndSay('21'));
// console.log(lookAndSay('1211'));
console.log(lookAndSay('111221'));
console.log(lookAndSay('312211'));
// console.log(lookAndSay('13112221'));