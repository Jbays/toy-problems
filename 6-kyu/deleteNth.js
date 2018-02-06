'use strict';

// Enough is enough!

// Alice and Bob were on a holiday.
//Both of them took many pictures of the places they've been,
//and now they want to show Charlie their entire collection.
//However, Charlie doesn't like this sessions,
//since the motive usually repeats.
//He isn't fond of seeing the Eiffel tower 40 times.
//He tells them that he will only sit during the session
//if they show the same motive at most N times.
//Luckily, Alice and Bob are able to encode the motive as a number.
//Can you help them to remove numbers such that their list contains
//each number only up to N times, without changing the order?

// Task

// Given a list lst and a number N,
//create a new list that contains each number of lst at most N times
//without reordering.
//For example if N = 2, and the input is [1,2,3,1,2,1,2,3],
//you take [1,2,3,1,2], drop the next [1,2]
//since this would lead to 1 and 2 being in the result 3 times,
//and then take 3, which leads to [1,2,3,1,2,3].

//generate a list of uniques

//generating this object will indicate which numbers are breaking the rules
//We can then delete all numbers which are breaking the rules

/**
  name:
  description:
  param:
  returns:
**/

function deleteNth(arr,x){
  let uniques = {};

  arr.forEach(function(entry,index){
    let uniquesArr = Object.keys(uniques);
    entry = entry.toString();

    //if entry is not present in uniquesArr,
    if (uniquesArr.indexOf(entry) === -1){
      uniques[entry] = 1;
    }
    //else entry is present in uniquesArr
    else if (uniquesArr.indexOf(entry) > -1 ) {
      uniques[entry] = uniques[entry]+1;
    }
  })

  return nextFunction(uniques,arr,x);
}

/**
  name:
  description:
  param:
  returns:
**/

function nextFunction(object,array,x){
  let scheduledForRemoval = [];

  Object.keys(object).forEach(function(key){
    if (object[key] > x) {
      //handles multiple instances of removal
      for (let i = 0;i < object[key]-x;i++){
        scheduledForRemoval.push(parseInt(key));
      }
    }
  })

  return nextNextFunction(scheduledForRemoval,array);
}

/**
  name:
  description:
  param:
  returns:
**/

function nextNextFunction(entriesForRemoval,allEntries){
  entriesForRemoval.forEach(function(entry){
    let lastIndex = allEntries.lastIndexOf(entry);

    if (lastIndex > -1){
      let firstHalf = allEntries.slice(0,lastIndex);

      allEntries = firstHalf.concat(allEntries.slice(lastIndex+1,allEntries.length))
    }
  })
  return allEntries;
}

// console.log(deleteNth([20,37,20,21], 1));
//==> [20, 37, 21]
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
//==> [1, 1, 3, 3, 7, 2, 2, 2]
// console.log(deleteNth([1, 1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 4, 5], 3));
//==> [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]
