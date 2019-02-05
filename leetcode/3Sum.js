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

const _ = require('lodash');

function threeSum(array){
  if ( array.length < 3 ) { return [] };
  array = array.sort((a,b)=>{return a-b});

  let output = [];
  let foundSums = {};

  console.log(array);

  for ( let i = 0; i < array.length; i++ ) {
    for ( let j = 1; j < array.length; j++ ) {
      //this should remove dups
      if ( i === j ) {
        j++
      } else {
        if ( !foundSums[array[i]+array[j]] ) {
          foundSums[array[i] + array[j]] = [[array[i],array[j]]];
        } else {
          //if the array is unique, add to array of arrays
          let intersection = checkForIntersections(foundSums,array[i]+array[j],[array[i],array[j]]);

          if ( intersection ){
            foundSums[array[i] + array[j]].push([array[i],array[j]]);
          }
        }
      }
    }
  }

  
  for ( let sum in foundSums ) {
    for ( let i = 0; i < foundSums[sum].length; i++ ) {
      console.log('foundSums[sum][i]',foundSums[sum][i]);
      
      for ( let j = 0; j < array.length; j++ ) {
        console.log(array[j]);
          if ( Number(sum) + array[j] === 0 ) {
              foundSums[sum].push(array[j]);
              output.push(foundSums[sum]);
          }  
      }
    }
        
  }
  function checkForIntersections(object,sum,array){
    for ( let i = 0; i < object[sum].length; i++ ) {
      if ( _.intersection(object[sum][i],array).length >= 2 ) {
        return false;
      }
    }
    return true;
  };

  console.log(foundSums)
  return output;
}

let input1 = [-1, 0, 1, 2, -1, -4]
//solutions 
console.log(threeSum(input1));