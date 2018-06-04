//one actionable change

// Complete the solution so that the function will break up camel casing,
// using a space between words.

function solution(string){
  let indexes = [];
  let output = [];
  // console.log("string>>>",string);

  for (let i = 0; i < string.length; i++ ) {
    if ( string[i] === string[i].toUpperCase() ) {
      indexes.push(i);
    }
  }

  //slice the original string into pieces using the indexes arr's indexes


  return output.join(' ');
}

solution('camelCaseTesting') // => should return 'camel Casing'


//this is the bottom of the file
