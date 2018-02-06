'use strict';

// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *
// for example, a tower of 3 floors looks like below
//[
//   '  *  ',
//   ' *** ',
//   '*****'
// ]

/**
  name: towerBuilder
  description: (1). creates asterix
               (2). create spaces
               (3). Appends asterixes and spaces, pushes into output, then returns
  param: nFloors (integer)
  returns: ["  *  "," *** ","*****"]
**/
function towerBuilder(nFloors) {
  let output = [];
  const maxFloorLength = (nFloors*2)-1;

  for (let i = 1;i<=nFloors;i++){
    let astrixNeeded = returnAsterix(i);
    let spacesToAdd = returnSpaces(maxFloorLength,astrixNeeded.length);
    let newLine = spacesToAdd+astrixNeeded+spacesToAdd;

    output.push(newLine);
  }

  /**
    name: returnAsterix
    description: returns stringified asterix as a function of interator (integer)
    param: iterator (integer)
    returns: "*"
  **/

  function returnAsterix(iterator){
    let asterixStr = "**".repeat(iterator);
    return asterixStr.slice(0,asterixStr.length-1);
  }

  /**
    name: returnSpaces
    description: Returns empty spaces depending on maxFloor length && astrixStr length
    param1: maxFloor   (integer)
    param2: astrLength (integer)
    returns: empty spaces
  **/

  function returnSpaces(maxFloor,astLength){
    //needed on each side
    let spacesNeeded = (maxFloor-astLength)/2;
    let spaces = " ".repeat(spacesNeeded);
    return spaces;
  }

  return output
}

// towerBuilder(1) ==> ["*"];
// towerBuilder(2) ==> [" * ","***"];
// towerBuilder(3) ==> ["  *  "," *** ","*****"];

// console.log(towerBuilder(3))
console.log(towerBuilder(4))
// console.log(towerBuilder(5))
// console.log(towerBuilder(6))
