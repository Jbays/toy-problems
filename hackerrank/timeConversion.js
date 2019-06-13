/*
  Given a time in -hour AM/PM format, convert it to military (24-hour) time.

  Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

  Function Description

  Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

  timeConversion has the following parameter(s):

  s: a string representing time in  hour format
  Input Format

  Constraints

  Sample Input 0
  07:05:45PM

  Sample Output 0
  19:05:45

*/

function timeConversion(s){
  let outputStr = '';
  let hours = s.slice(0,2);
  let theRest = s.slice(2,-2);

  if ( s.includes('P') ) {
    if ( s[0] === '1' ) {
      if ( s[1] === '0' || s[1] === '1' ) {
        hours = Number(hours)+12;
        outputStr += (hours).toString()+theRest;  
      } else {
        outputStr += hours+theRest;
      }
    }
    if ( s[0] === '0' ) {
      hours = Number(hours)+12;
      outputStr += (hours).toString()+theRest;
    }
  }
  
  if ( s.includes('A') ) {
    if ( s[0] === '1' ) {
      if ( s[1] === '0' || s[1] === '1' ) {
        outputStr += hours+theRest;
      } else {
        outputStr += '00'+theRest;
      }
    } 
    if ( s[0] === '0' ) {
      outputStr += hours + theRest;
    }
  }

  return outputStr;
}

console.log(timeConversion('12:00:00AM')) //=> '12:00:00'
console.log(timeConversion('12:02:01AM')) //=> '12:02:01'
console.log(timeConversion('01:32:32AM')) //=> '01:32:32'
console.log(timeConversion('07:28:49AM')) //=> '07:28:49'
console.log(timeConversion('10:12:29AM')) //=> '10:12:29'
console.log(timeConversion('11:19:29AM')) //=> '11:19:29'
console.log(timeConversion('12:02:01PM')) //=> '12:02:01'
console.log(timeConversion('01:44:22PM')) //=> '13:44:22'
console.log(timeConversion('07:05:45PM')) //=> '19:05:45'
console.log(timeConversion('10:15:12PM')) //=> '22:15:12'