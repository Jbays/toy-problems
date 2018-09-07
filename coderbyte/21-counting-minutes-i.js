// Have the function CountingMinutesI(str) take the str
// parameter being passed which will be two times (each
// properly formatted with a colon and am or pm) separated
// by a hyphen and return the total number of minutes between
// the two times. The time will be in a 12 hour clock format.
// For example: if str is 9:00am-10:00am then the output should
// be 60. If str is 1:00pm-11:00am the output should be 1320. 

// Correct Sample Outputs
// Input = "12:30pm-12:00am" || Output = 690
// Input = "1:23am-1:08am"   || Output = 1425

function CountingMinutesI(str) {
  //arrayifies and splits string into starting time and ending time
  var timeArray = str.split("-");
  var startTime = timeArray[0];
  var endTime = timeArray[1];
  //removes colon from startTime
  var startTimeArr = startTime.split(":");
  //converts string to number
  var startTimeHour = Number(startTimeArr[0]);
  //removes am/pm suffice and converts string to number
  var startTimeMinute = parseInt(startTimeArr[1].replace(/[^0-9]/g, ""));
  //removes all non-letters from string
  var startTimeAMPM = startTimeArr[1].replace(/[^a-zA-Z]/g, "");
  //removes colon from endTime
  var endTimeArr = endTime.split(":");
  //converts string to number
  var endTimeHour = Number(endTimeArr[0]);
  //removes am/pm suffix and converts string to number
  var endTimeMinute = parseInt(endTimeArr[1].replace(/[^0-9]/g, ""));
  //removes all non-letters from string
  var endTimeAMPM = endTimeArr[1].replace(/[^a-zA-Z]/g, "");

  //if startTimeHour has PM suffix and is NOT equal to 12
  if ( (startTimeAMPM === "pm") && (startTimeHour !== 12) ) {
    //add 12 to startTimeHour  
    startTimeHour += 12;
  };
  //if endTimeHour has PM suffix and is NOT equal to 12
  if ( (endTimeAMPM === "pm") && (endTimeHour !== 12) ) {
    //add 12 to endTimeHour
    endTimeHour += 12;
  };
  //if startTimeHour has AM suffix and IS equal to 12
  if ( (startTimeAMPM === "am") && (startTimeHour === 12) ) {
    //subtract 12 from startTimeHour
    startTimeHour -= 12;
  };
  //if endTimeHour has AM suffix and IS equal to 12
  if ( (endTimeAMPM === "am") && (endTimeHour === 12) ) {
    //subtract 12 from endTimeHour
    endTimeHour -= 12;
  };

  // case 1: startTime is greater than endTime
  if ((startTimeHour > endTimeHour) || ((startTimeHour === endTimeHour) && (startTimeMinute > endTimeMinute))) {
    //subtract their difference from all the minutes in a full day
    return (((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute)) + 1440
  } else {
    //case 2: endTime is greater than startTime
    return ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute);
  }
}



