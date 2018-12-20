/*

  6-kyu

  https://www.codewars.com/kata/the-deaf-rats-of-hamelin/train/javascript

  Story
  The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

  But some of the rats are deaf and are going the wrong way!

  Kata Task
  How many deaf rats are there?

  Legend
  P = The Pied Piper
  O~ = Rat going left
  ~O = Rat going right
  Example
  ex1 ~O~O~O~O P has 0 deaf rats
  ex2 P O~ O~ ~O O~ has 1 deaf rat
  ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

*/

function countDeafRats(town){
  let blindRatCount = 0;

  town = town.replace(/ /g,'').split('P');
  //re-orient the rats
  town[0] = town[0].split('').reverse().join('');
  console.log('town>>>',town);
  town = town.join('')
  console.log('town>>>!!!',town);

  for ( let i = 0; i < town.length; i+=2 ) {
    if ( town[i] === '~' && town[i+1] === 'O' ) {
      blindRatCount++;
    }
  }
  
  return blindRatCount;
}

let input1 = '~O~O~O~O P';
let input2 = 'P O~ O~ ~O O~'; //1 deaf rat
let input3 = '~O~O~O~OP~O~OO~'; //2 deaf rats
let input4 = 'PO~O~O~O~O~O~O~O~  O~O~O~O~~OO~    O~O~O~O~'; //1 deaf rat
let input5 = '~O~O~O~O  ~O~O~O~O~O~O~O~O~OO~~OO~~O  PO~O~O~O~O~O~O~~OO~O~O~' //3 deaf rats

console.log(countDeafRats(input1));
console.log(countDeafRats(input2));
console.log(countDeafRats(input3));
console.log(countDeafRats(input4));
console.log(countDeafRats(input5));
