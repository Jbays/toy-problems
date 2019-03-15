/*
  Military Time
    Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

    Examples
    Input	
      time: "3:00pm"	
    Output
      "15:00"
    
    Input	
      time:"9:15am"
    Output
      "09:15"
    
    Input	
      time:"12:00am"
    Output
      "00:00"
    
    Input	
      time:"04:00"
    Output
      "04:00"
*/


function toMilitary(str){
  if ( !str.includes('a') && !str.includes('p') ){
    return str;
  }

  if ( str.includes('a') ) {
    if ( str[0] === '1' && str[1] !== ':' ) {
      if (str[1] === '2') {  //if its midnight
        return `00${str.slice(2,-2)}`;
      } else {  //if its 10 || 11 am
        return str.slice(0,-2);
      }
    } else { //if its 1am thru 9am
      return `0${str.slice(0,-2)}`;
    }
  }

  if ( str.includes('p') ) {
    if ( str[0] === '1' && str[1] !== ':' ) {
      if ( str[1] === '2' ) {//if its noon
        return str.slice(0,-2);
      } else {  //if its 10 || 11pm
        return `${12+Number(str.slice(0,2))}${str.slice(2,-2)}`;
      }
    } else {
      return `${12+Number(str[0])}${str.slice(1,-2)}`;
    }
  }
}

console.log(toMilitary("12:00pm"));
console.log(toMilitary("12:45pm"));
console.log(toMilitary("1:03pm"));
console.log(toMilitary("3:07pm"));
console.log(toMilitary("8:59pm"));
console.log(toMilitary("10:10pm"));
console.log(toMilitary("11:11pm"));
console.log(toMilitary("12:00am"));
console.log(toMilitary("12:57am"));
console.log(toMilitary("1:23am"));
console.log(toMilitary("04:00"));
console.log(toMilitary("9:15am"));
console.log(toMilitary("10:39am"));
console.log(toMilitary("11:16am"));