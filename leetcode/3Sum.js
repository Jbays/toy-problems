/*

  https://leetcode.com/problems/3sum/

  15. 3Sum

  Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

  Note:

  The solution set must not contain duplicate triplets.

  Example:

  Given array nums = [-1, 0, 1, 2, -1, -4],

  A solution set is:
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]

*/

// function threeSum(array){
//   if ( array.length < 3 ) { return [] };
//   array = array.sort((a,b)=>{return a-b});

//   let output = [];
//   let foundSums = {};

//   //calculate 2-sum
//   for ( let i = 0; i < array.length; i++ ) {
//     for ( let j = 1; j < array.length; j++ ) {
      
//       if ( !foundSums[array[i]+array[j]] ){
//         foundSums[array[i]+array[j]] = [array[i],array[j]];
//       } else {
//         let sum = (array[i]+array[j]).toString()
//         sum += `${i}` + `${j}`
//         foundSums[sum] = [array[i],array[j]];
//       }

//     }
//   }

//   for ( let sum in foundSums ) {
//     let sumCopy = sum;
//     //must now sanitize sum 
//     if ( sum[0] === '-' ){
//       sumCopy = Number(sum.slice(0,2));
//     } else {
//       sumCopy = Number(sum.slice(0,1));
//     }
    
//     for ( let i = 0; i < array.length; i++ ) {
//       console.log('this is sum',sum);
//       console.log('this is array[i]',array[i]);
//       if ( sumCopy + array[i] === 0 ) {
//         foundSums[sum].push(sumCopy);
//         output.push(foundSums[sum])
//       }
//     }

//   }

//   console.log('foundSums',foundSums)

//   //then make one more pass

  
//   return output;
//   // console.log('array',array);
// }

let input1 = [-1, 0, 1, 2, -1, -4]
//solutions 
console.log(threeSum(input1));