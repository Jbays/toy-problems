/*

  Words within Words
    Given an array of unique words, 
    find the word that contains the greatest number of other words. 
    A word must be at least two letters long.

  Input: [ "gray", "grays", "ray", "rays", "strays" ]
  Output: "grays"

*/

//time  complexity is O(n*(n-1)) --> O(n^2)
////where n is the length of the wordList array
//space complexity is O(1)
function nestedWordCount(wordList){
  let sortedWordList = wordList.sort((a,b)=>{return b.length-a.length});

  let maxCount = 0;
  let elemIndex = -1;
  for ( let i = 0; i < sortedWordList.length; i++ ){
    let tempCount = 0;
    let tempVal = sortedWordList[i];
    for ( let j = 1; j < sortedWordList.length; j++ ) {
      if ( tempVal.includes(sortedWordList[j]) ) {
        tempCount++;
      }
    }
    if ( tempCount > maxCount ) {
      maxCount = tempCount;
      elemIndex = i;
    }
  }

  return sortedWordList[elemIndex];
}

console.log(nestedWordCount(["gray", "grays", "ray", "rays", "strays"]));
console.log(nestedWordCount(["dis", "disintegrate", "disrated", "disrating", "rat", "rate", "rated", "rating"]));
console.log(nestedWordCount(["ant", "anti", "antiparticle", "antiparty", "apart", "art", "arty", "disparted", "impart", "imparted", "interparticle", "interparty", "part", "parted", "party", "tip"]));