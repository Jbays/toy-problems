// http://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression/train/javascript

function findMissing (list) {
  // let output = [list[0]];
  // let diffs = [];
  // let first = list[0]
  let lastDiff = null;
  for ( let i = 0; i < list.length-1; i++ ) {
    let diff = list[i]-list[i+1];

    console.log(list[i]);
  }

  // for ( let i = 0; i < list.length-1; i++ ) {
  //   diffs.push(list[i]-list[i+1])
  // }
  //
  // let actualDiff = diffs.sort((a,b)=>{return b-a}).shift();
  // console.log(actualDiff)
  //
  // for ( let i = 0; i < list.length; i++ ) {
  //   let lastVal = output[i];
  //   output.push(lastVal-actualDiff)
  // }
  // return output;
}

console.log(findMissing([ 2, 8, 20, 26, 32, 38 ]));
