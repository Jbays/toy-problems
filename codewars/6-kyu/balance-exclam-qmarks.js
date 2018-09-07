// https://www.codewars.com/kata/exclamation-marks-series-number-17-put-the-exclamation-marks-and-question-marks-to-the-balance-are-they-balanced/train/javascript

// Description:
// Each exclamation mark weight is 2;
// Each question mark weight is 3.
//Put two string left and right to the balance, Are they balanced?
//
// If the left side is more heavy, return "Left";
//If the right side is more heavy, return "Right";
//If they are balanced, return "Balance".
//
// Examples

function balance(left,right){
  let tally = 0;

  function calculateTally(array){
    return array.split('').reduce((a,b)=>{
      if ( b === "!" ) {
        return a+2;
      } else {
        return a+3
      }
    },0);
  }

  let leftTally = calculateTally(left);
  let rightTally = calculateTally(right);

  if ( leftTally > rightTally ) {
    return "Left";
  } else if ( leftTally < rightTally ) {
    return "Right";
  } else {
    return "Balance"
  }
}

console.log("Right>>>>",balance("!!","??"))
console.log("Left >>>>",balance("!??","?!!"))
console.log("Left >>>>",balance("!?!!","?!?"))
console.log("Balance >",balance("!!???!????","??!!?!!!!!!!"))
