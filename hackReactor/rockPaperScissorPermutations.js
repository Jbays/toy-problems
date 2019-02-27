/*

  Rock Paper Permutation
    Given a number of rounds n, 
      return all the possible rock-paper-scissors play possibilities for that number of rounds.

    Examples
      Input	
        roundCount: 1	
      
      Output
        [ "r", "p", "s" ]
      
      Input	
        roundCount: 2	
      Output
        [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
      
      Input	
        roundCount:0	
        
      Output
        [ ]
*/

//from 4 years ago!
// var rockPaperPermutation = function (rounds) {
//   var options = ['r', 'p', 's'];
//   var results = [];
//   var findCombos = function (roundsLeft, gamesPlayedSoFar) {
//     if (roundsLeft === 0) {
//       results.push(gamesPlayedSoFar);
//       return;
//     }
//     for (var i = 0; i < options.length; i++) {
//       var oneOption = options[i];
//       findCombos(roundsLeft - 1, gamesPlayedSoFar.concat(oneOption));
//     }
//   }
//   findCombos(rounds, []);
//   return results;
// }

//time complexity = O(r*n)
//where r is # of rounds, n is the length of output
//space complexity = O(3^r)
//where r is # of rounds.
function rockPaperPermutation(rounds,output=[]){
  const options = ['r','p','s'];
  
  if ( rounds === 0 ) { return output };

  if ( output.length === 0 ) {
    return rockPaperPermutation(--rounds,options);
  }

  let temp = [];
  for ( let i = 0; i < output.length; i++ ) {
    for ( let j = 0; j < options.length; j++ ) {
      temp.push(output[i]+options[j]);      
    }
  }

  return rockPaperPermutation(--rounds,temp);
}

// console.log(rockPaperPermutation(0));
// console.log(rockPaperPermutation(1));
// console.log(rockPaperPermutation(2));
// console.log(rockPaperPermutation(3));