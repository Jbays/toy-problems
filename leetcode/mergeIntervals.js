/**

  medium

  https://leetcode.com/problems/merge-intervals/

  merge intervals

  Given a collection of intervals, merge all overlapping intervals.

  Example 1:

  Input: [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
  Example 2:

  Input: [[1,4],[4,5]]
  Output: [[1,5]]
  Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

const input1 = [[1,3],[2,6],[8,10],[15,18]];
const input2 = [[1,4],[4,5]];
const input3 = [[1,9],[2,5],[19,20],[10,11],[12,20],[0,3],[0,1],[0,2]];
const input4 = [[1,3],[2,6],[8,10],[15,18]];

//time complexity --> O(n*log(n)); log n to sort.  then n to pass through the whole array once.
function merge(intervals){
  let output = [];
  
  intervals = intervals.sort((a,b)=>{
    return a[0] - b[0];
  })

  for ( let i = 0; i < intervals.length; i++ ) {
    let lastGuyInOutput = output[output.length-1] ? output[output.length-1][1] : undefined;
    if ( output.length === 0 || lastGuyInOutput < intervals[i][0] ) {
      output.push(intervals[i])
    } else {
      output[output.length-1][1] = Math.max(lastGuyInOutput,intervals[i][1])
    }
  }

  return output;
}

// console.log(merge(input1));
// console.log(merge(input2));
// console.log(merge(input3));
console.log(merge(input4));