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

function towerBuilder(nFloors) {
  let output = ["*"];

  if (nFloors === 1){return output}

  //this builds the basic floors

  let maxFloorLength = nFloors*2-1;
  // console.log("maxFloorLength>>",maxFloorLength);

  for (let i=2;i<=nFloors;i++ ){
    let newFloor = output[i-2]+"**";

    // console.log("spacesNeededEachSide>>>",spacesNeededEachSide);

    if (i !== nFloors){
      const spacesNeededEachSide = (maxFloorLength - newFloor.length)/2;
      console.log("newFloor before>>>",newFloor);

      console.log("spacesNeededEachSide>>>",spacesNeededEachSide);

      // newFloor = " ".repeat(spacesNeededEachSide)+newFloor+" ".repeat(spacesNeededEachSide);
      newFloor = " ".repeat(spacesNeededEachSide)+newFloor;
      // newFloor = newFloor+" ".repeat(spacesNeededEachSide)
      console.log("newFloor after >>>",newFloor);
      console.log("after spacesNeededEachSide>>>",spacesNeededEachSide);
    }


    output.push(newFloor)
  }

  const lastEntryLength = output[output.length-1].length;
  console.log("before --> this is output>>>>",output);

  return output
}

// towerBuilder(1) ==> ["*"];
// towerBuilder(2) ==> [" * ","***"];
// towerBuilder(3) ==> ["  *  "," *** ","*****"];

console.log(towerBuilder(4))
// console.log(towerBuilder(5))
// console.log(towerBuilder(6))
