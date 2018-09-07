// https://www.codewars.com/kata/sum-of-pairs/train/javascript

const l1= [1, 4, 8, 7, 3, 15];
const l2= [1, -2, 3, 0, -6, 1];
const l3= [20, -13, 40];
const l4= [1, 2, 3, 4, 1, 0];
const l5= [10, 5, 2, 3, 7, 5];
const l6= [4, -2, 3, 3, 4];
const l7= [0, 2, 0];
const l8= [5, 9, 13, -3];

function sum_pairs(ints, s){
  // let output = [];
  ints = ints.sort((a,b)=>{return a-b})

  let left = 0
  let right = ints.length-1;
  let leftPointer = ints[left];
  let rightPointer = ints[right];

  let sum = leftPointer+rightPointer;
  // console.log("this is sum>>>",sum);
  if ( sum < s ) {
    ints.shift();
    sum_pairs(ints,s);
  } else if ( sum > s ) {
    ints.pop();
    sum_pairs(ints,s);
  } else if ( sum === s ) {
    console.log("what?")
    // output.push(leftPointer,rightPointer)
    return [];
  } else {
    return "No Match"
  }
}
console.log("sum_pairs(l1, 8)",sum_pairs(l1, 8))
let result = sum_pairs(l1,8);
console.log("this is result>>>",result);
// sum_pairs(l1, 8)+"" == [1, 7]+"", "Basic: ["+l1+"] should return [1, 7] for sum = 8");
console.log(sum_pairs(l2, -6))
// sum_pairs(l2, -6)+"" == [0, -6]+"", "Negatives: ["+l2+"] should return [0, -6] for sum = -6");
// console.log(sum_pairs(l3, -7))
// sum_pairs(l3, -7) == undefined, "No Match: ["+l3+"] should return undefined for sum = -7");
// console.log(sum_pairs(l4, 2))
// sum_pairs(l4, 2)+"" == [1, 1]+"", "First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");
// console.log(sum_pairs(l5, 10))
// sum_pairs(l5, 10)+"" == [3, 7]+"", "First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");
// console.log(sum_pairs(l6, 8))
// sum_pairs(l6, 8)+"" == [4, 4]+"", "Duplicates: ["+l6+"] should return [4, 4] for sum = 8");
// console.log(sum_pairs(l7, 0))
// sum_pairs(l7, 0)+"" == [0, 0]+"", "Zeroes: ["+l7+"] should return [0, 0] for sum = 0");
// console.log(sum_pairs(l8, 10))
// sum_pairs(l8, 10)+"" == [13, -3]+"", "Subtraction: ["+l8+"] should return [13, -3] for sum = 10");
