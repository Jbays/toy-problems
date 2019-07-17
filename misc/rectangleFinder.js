//1st iteration
//O(n*m)
function findOneRectangle(imageArr){
  let output = []
  let foundTopLeftZero = false;
  let foundBottomRightZero = false;

  for ( let i = 0; i < imageArr.length; i++ ) {
    for ( let j = 0; j < imageArr[i].length; j++ ){
      if ( !foundTopLeftZero ) {
        if ( imageArr[i][j] === 0 ) {
          output.push([i,j])
          foundTopLeftZero = true;
        }
      }
    }
  }
  
  for ( let i = imageArr.length-1; i >= 0; i-- ) {
    for ( let j = imageArr[i].length-1; j >= 0; j-- ){
      if ( !foundBottomRightZero ) {
        if ( imageArr[i][j] === 0 ) {
          output.push([i,j])
          foundBottomRightZero = true;
        }
      }
    }
  }

  return output;
};


//time complexity --> O(n*m) where n is the number of rows and m is the number of columns
//space complexity -> O(n*m) where n is the number of rows and m is the number of columns
function findManyRectangles(arrayOfImages){
  let output = [];
  let placesAlreadyVisited = {};

  for ( let i = 0; i < arrayOfImages.length; i++ ) {
    placesAlreadyVisited[i] = {};
    let prevRow = Array.isArray(arrayOfImages[i-1]) ? arrayOfImages[i-1] : 1;
    let nextRow = Array.isArray(arrayOfImages[i+1]) ? arrayOfImages[i+1] : 1;

    for ( let j = 0; j < arrayOfImages[i].length; j++ ) {
      //if this is your first visit
      if ( !placesAlreadyVisited[i].hasOwnProperty(j) ) {
        if ( arrayOfImages[i][j] === 0 ) {
          let nineOClock = arrayOfImages[i][j-1] === 0 ? arrayOfImages[i][j-1] : 1;
          let twelveOClock = Array.isArray(prevRow) ? prevRow[j] : 1;
          let threeOClock = arrayOfImages[i][j+1] === 0 ? arrayOfImages[i][j+1] : 1;
          let sixOClock = Array.isArray(nextRow) ? nextRow[j] : 1;

          //search for 1x1
          if ( threeOClock === 1 && sixOClock === 1 && nineOClock === 1 && twelveOClock === 1 ) {
            output.push([[i,j],[i,j]]);
          }

          //search for 1xn
          if ( threeOClock === 1 && sixOClock === 0 && nineOClock === 1 && twelveOClock === 1 ) {
            let vertShift = 1;

            if ( !placesAlreadyVisited.hasOwnProperty(i+1) ) {
              placesAlreadyVisited[i+1] = {};
            }

            placesAlreadyVisited[i+1][j] = true;

            //technically we already know the first one exists
            while ( arrayOfImages[i+1+vertShift][j] === 0 ) {
              if ( !placesAlreadyVisited.hasOwnProperty(i+1+vertShift) ) {
                placesAlreadyVisited[i+1+vertShift] = {};
              }
              placesAlreadyVisited[i+1+vertShift][j] = true;
              vertShift++;
            }

            output.push([[i,j],[(i+vertShift),j]]);
          }

          //search for nx1
          if ( threeOClock === 0 && sixOClock === 1 && nineOClock === 1 && twelveOClock === 1 ) {
            let horzShift = 1;

            while ( arrayOfImages[i][j+1+horzShift] === 0 ) {
              horzShift++;
              placesAlreadyVisited[i][j+1+horzShift] = true;
            }

            output.push([[i,j],[i,j+1+horzShift]]);
          }

          //search for nxm (general search)
          if ( threeOClock === 0 && sixOClock === 0 && nineOClock === 1 && twelveOClock === 1 ) {
            let vertShift = 1;
            let horzShift = 1;

            //while threeOClock's threeOClock is a zero
            while ( arrayOfImages[i][j+1+horzShift] === 0 ) {
              horzShift++;
              placesAlreadyVisited[i][j+1+horzShift] = true;
            }

            //while sixOClock's sixOClock is a zero 
            while ( arrayOfImages[i+1+vertShift][j] === 0 ) {
              vertShift++;
              if ( !placesAlreadyVisited.hasOwnProperty(i+1+vertShift) ){
                placesAlreadyVisited[i+1+vertShift] = {};
              }
              placesAlreadyVisited[i+1+vertShift][j] = true;
            }

            output.push([[i,j],[i+vertShift,j+horzShift]])
          }

          placesAlreadyVisited[i][j] = true;
        }
      }
    }
  }
  return output;
}

let image2_0 = [
  [1,1,1,1,1,1,1],
  [1,1,1,0,0,0,1],
  [1,1,1,0,0,0,1],
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
]

let image2_1 = [
  [0,1,1,1,1,1,1],
  [1,1,1,0,0,0,1],
  [1,1,1,0,0,0,1],
  [1,0,1,1,1,1,1],
  [1,0,1,0,0,0,1],
  [1,0,1,1,1,1,1],
  [1,0,1,0,0,1,1],
  [1,0,1,0,0,1,1],
  [1,1,1,1,1,1,0],
]

let image2_2 = [
  [0,1,0,0,1],
  [1,1,1,1,0],
  [0,0,1,0,1],
  [0,0,1,0,1],
  [1,1,1,0,1],
]

// console.log(findManyRectangles(image2_0)) //should return coordinates for 1 rectangle
// console.log(findManyRectangles(image2_1)) //should return coordinates for 6 rectangles
console.log(findManyRectangles(image2_2)) //should return coordinates for 6 rectangles