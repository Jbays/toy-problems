function bestMatch(winnerArr,loserArr){
  let differences = winnerArr.map((score,index)=>{
    return score - loserArr[index];
  })

  let lowestDiff = Math.min(...differences);

  if ( differences.indexOf(lowestDiff) === differences.lastIndexOf(lowestDiff) ) {
    return differences.indexOf(lowestDiff);
  }

  let highestLoserIndex = null;
  differences.forEach((scoreDiff,index)=>{
    if ( scoreDiff === lowestDiff ) {
      if ( loserArr[index] > highestLoserScore ) {
        highestLoserIndex = index;
      }
    }
  })

  return highestLoserIndex;
}

// console.log(bestMatch([6, 4], [1, 2])=== 1)
// console.log(bestMatch([1], [0])=== 0)
// console.log(bestMatch([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])=== 4)
// console.log(bestMatch([3, 4, 3], [1, 1, 2])=== 2)
// console.log(bestMatch([4, 3, 4], [1, 1, 1])=== 1)
// console.log(bestMatch([11, 7, 5, 9, 10, 8, 13, 11, 2, 9, 8, 6, 1, 14, 3, 6, 10],[1, 4, 4, 4, 9, 1, 6, 8, 1, 2, 1, 0, 0, 6, 2, 0, 6])===4);
// console.log(bestMatch([12, 13, 7, 13, 13, 8, 2, 8, 11, 14, 9, 14, 6, 6, 16, 2, 1], [7, 10, 2, 3, 7, 4, 1, 6, 8, 8, 8, 4, 3, 3, 9, 1, 0])===10)
// console.log(bestMatch([16, 8, 8, 17, 8, 14, 19, 15, 5, 12, 15, 18, 19, 10, 12], [7, 6, 6, 7, 1, 6, 9, 8, 2, 4, 5, 8, 9, 3, 4])===1);
// console.log(bestMatch([14, 7, 15, 3, 6, 6, 12, 9, 12, 10, 3, 5, 15, 9, 10], [10, 2, 7, 2, 0, 4, 8, 1, 2, 8, 2, 0, 10, 3, 3])===3)