function bestMatch(winnerArr,loserArr){
  let differences = winnerArr.map((score,index)=>{
    return score - loserArr[index];
  })

  let lowestDiff = Math.min(...differences);

  if ( differences.indexOf(lowestDiff) === differences.lastIndexOf(lowestDiff) ) {
    return differences.indexOf(lowestDiff);
  }

  let highestLoserScore = null;
  differences.forEach((scoreDiff,index)=>{
    if ( scoreDiff === lowestDiff ) {
      if ( loserArr[index] >= highestLoserScore ) {
        highestLoserScore = loserArr[index];
      }
    }
  })

  return loserArr.indexOf(highestLoserScore);
}

// console.log(bestMatch([6, 4], [1, 2])=== 1)
// console.log(bestMatch([1], [0])=== 0)
// console.log(bestMatch([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])=== 4)
// console.log(bestMatch([3, 4, 3], [1, 1, 2])=== 2)
// console.log(bestMatch([4, 3, 4], [1, 1, 1])=== 1)

console.log(bestMatch([11, 7, 5, 9, 10, 8, 13, 11, 2, 9, 8, 6, 1, 14, 3, 6, 10],[1, 4, 4, 4, 9, 1, 6, 8, 1, 2, 1, 0, 0, 6, 2, 0, 6])===4);