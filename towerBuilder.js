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
  const maxFloorLength = (nFloors*2)-1;

  for (let i =1;i<nFloors;i++){
    let newFloor = output[i-1]+"**";
    let spaceDiff = 1+(maxFloorLength - newFloor.length)/2;

    // const copy = spaceDiff;
    // let spaces = returnSpaces(spaceDiff);
    // let spaces2 = returnSpaces(copy);
    //
    // //repeat doesn't work because of returning invalid count value!!!
    // newFloor = spaces+newFloor+spaces2;

    output.push(newFloor);
  }

  function returnSpaces(integer){
    return " ".repeat(integer);
  }

  // for (let i=2;i<=nFloors;i++ ){
  //   let newFloor = output[i-2]+"**";
  //   console.log("maxFloorLength>>>",maxFloorLength);
  //   console.log("newFloor.length>>>",newFloor.length);
  //   let spacesNeededEachSide = (maxFloorLength - newFloor.length)/2;
  //   console.log("spacesNeededEachSide>>>",spacesNeededEachSide);
  //
  //   if (i !== nFloors){
  //     let spaces = " ".repeat(spacesNeededEachSide);
  //
  //     // newFloor = " ".repeat(spacesNeededEachSide)+newFloor+" ".repeat(copy);
  //     newFloor = spaces+newFloor+spaces;
  //   }
  //   // console.log("output before",output);
  //   output.push(newFloor)
  //   // console.log("output after",output);
  // }

  return output
}

// towerBuilder(1) ==> ["*"];
// towerBuilder(2) ==> [" * ","***"];
// towerBuilder(3) ==> ["  *  "," *** ","*****"];

console.log(towerBuilder(3))
// console.log(towerBuilder(4))
// console.log(towerBuilder(5))
// console.log(towerBuilder(6))
