function bestMatch(winnerArr,loserArr){
  let differences = winnerArr.map((score,index)=>{
    return score - loserArr[index];
  })

  let lowestDiff = Math.min(...differences);

  //two possible cases
  
  //case one: if there is actually one single lowest difference
  if ( differences.indexOf(lowestDiff) === differences.lastIndexOf(lowestDiff) ) {
    return differences.indexOf(lowestDiff);
  }
  
  console.log('this is differences',differences);
  console.log('lowestDiff>>>>',lowestDiff);

  //case two: if the lowest difference has duplicates

  //look for the 
  //currently finding the highest difference!
  //not the lowest difference which corresponds to 
  // let lowestDifference = differences[0];
  
  // differences.forEach((scoreDiff,index)=>{
  //   if (scoreDiff <= lowestDifference ) {
  //     lowestDifference = scoreDiff;
  //   }
  // })
  // console.log('lowestDifference',lowestDifference);
  // return differences.lastIndexOf(lowestDifference);



  //if ties --> return index corresponding to highest score in loserArr
  //&& lowest score in winnerArr


}

// console.log(bestMatch([6, 4], [1, 2])=== 1)
// console.log(bestMatch([1], [0])=== 0)
// console.log(bestMatch([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])=== 4)
// console.log(bestMatch([3, 4, 3], [1, 1, 2])=== 2)
// console.log(bestMatch([4, 3, 4], [1, 1, 1])=== 1)

console.log(bestMatch([11, 7, 5, 9, 10, 8, 13, 11, 2, 9, 8, 6, 1, 14, 3, 6, 10],[1, 4, 4, 4, 9, 1, 6, 8, 1, 2, 1, 0, 0, 6, 2, 0, 6])===4);