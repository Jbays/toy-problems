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
  indexes.forEach((slicePoint,index)=>{
    //first case
    if ( index === 0 ) {
      output.push(string.slice(index,slicePoint));
    } else {
      //base case
      output.push(string.slice(indexes[index-1],slicePoint))
    }

    //last case
    if ( index === indexes.length-1 ) {
      output.push(string.slice(slicePoint))
    }
  })

  return output.join(' ');
}

solution('camelCaseTesting') // => should return 'camel Casing'
