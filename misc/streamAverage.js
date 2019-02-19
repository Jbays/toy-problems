function printAverage(array,number){
  let containerArr = [];
  let iterator = 0;
  let count = 0;

  while ( array[iterator] ) {
    containerArr.push(array[iterator]);

    if ( count < number ) {
      count++;
    }  else {
      containerArr.shift();
    }

    iterator++;
  }
  return containerArr.reduce((a,b)=>{return a+b})/number;
}

let INPUT_1 = [1,1,8]
let INPUT_2 = [1,2,3,4,5,6];

console.log(printAverage(INPUT_1,2));
// (1), avg = 1
// (1,1), avg = 1
// (1,8), avg = 4.5

// console.log(printAverage(INPUT_2,4));
// (1,), avg = 1
// (1,2), avg = 1.5
// (1,2,3), avg = 2
// (1,2,3,4), avg = 10/4
// (2,3,4,5), avg = 14/4
// (3,4,5,6), avg = 18/4