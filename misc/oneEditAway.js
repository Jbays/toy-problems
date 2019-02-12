function oneEditAway(wordOne,wordTwo){
  let wordOneCopy = wordOne;
  let wordTwoCopy = wordTwo;
  let diffCount = 0;

  for ( let i = 0; i < wordOneCopy.length; i++ ) {
    let upChar = wordOneCopy[i];
    let downChar = wordTwoCopy[i];

    //if already at one difference
    if ( diffCount === 1 ) { 
      //the rest of both strings must be identical
      return wordOneCopy.slice(i) === wordTwoCopy.slice(i)
    }
    
    //handles cases where wordTwoCopy is the longer string
    if ( i === wordOneCopy.length-1 ) {
      if ( wordTwoCopy[i+1] ){
        diffCount++;
      }
    }
    
    //here's the catch
    if ( diffCount > 1 ) {
      return false;
    }

    if ( wordOneCopy.length === wordTwoCopy.length ) {
      if ( upChar !== downChar ) {
        diffCount++;
      }
    } else {
      if ( upChar !== downChar ) {
        if ( firstIsLongerThanSecond(wordOneCopy,wordTwoCopy) ) {
          wordOneCopy = wordOneCopy.slice(1);
        } else {
          wordTwoCopy = wordTwoCopy.slice(1);
        }
        diffCount++;
      }
    }
  }

  function firstIsLongerThanSecond(stringOne,stringTwo){
    if ( stringOne.length > stringTwo.length ) {
      return true;
    }
    return false;
  }

  return diffCount < 2;
}

const INPUT_1 = 'space';

//true
const TEST_CASE_1 = 'spice';
const TEST_CASE_2 = 'pace';
const TEST_CASE_3 = 'spaced';

//false
const TEST_CASE_4 = 'spiced';
const TEST_CASE_5 = 'sphaced';


console.log(oneEditAway(INPUT_1,TEST_CASE_1))
console.log(oneEditAway(INPUT_1,TEST_CASE_2))
console.log(oneEditAway(INPUT_1,TEST_CASE_3))

console.log(oneEditAway(INPUT_1,TEST_CASE_4))
console.log(oneEditAway(INPUT_1,TEST_CASE_5))
