//https://www.codewars.com/kata/simple-string-expansion/train/javascript

// Consider the following expansion:
//
// solve("3(ab)") = "ababab" -- "ab" repeats 3 times
// solve("2(a3(b))" = "abbbabbb" -- "a3(b)" == "abbb" repeats twice.
// Given a string, return the expansion of that string.
//
// Input will consist of only lowercase letters and numbers in valid parenthesis.
// There will be no letters or numbers after the last closing parenthesis.
//
// More examples in test cases.
//
// Good luck!

function solve(str){
  let output = "";
  //NOTE: lines 18 thru 29 jsonify the input
  let relevantPiece = '["'+str.replace(/[(]/g,'",["')
  let closingBrackets = "";
  for ( let i = relevantPiece.length; i >= 0; i-- ) {
    if ( relevantPiece[i] === ")" ) {
      closingBrackets += "]"
      if ( relevantPiece[i-1] !== ")" ){
        relevantPiece = relevantPiece.slice(0,i) + '"' + closingBrackets + "]";
      }
    }
  }
  relevantPiece = JSON.parse(relevantPiece);

  //recursive map --> should return string
  function recursiveMap(nestedArrays,outputString,trailingBits){
    if ( nestedArrays[1][1] === undefined ) {
      let parent = nestedArrays[0].split('');
      let child = nestedArrays[1][0];

      console.log('at the bottom parent',parent)
      console.log('at the bottom child',child)

      parent.forEach((item)=>{
        console.log("this will modify>>>",item);
        //if item is a number
        if ( parseInt(item) ) {
          for ( let i = 0; i < parseInt(item); i++ ) {
            outputString += child
          }
        } else {
          //item is non-number
          outputString += item;
        }
      })
      console.log("nestedArrays!!!!>>>",nestedArrays)
      console.log("outputString>>>",outputString)
      console.log("this is trailingBits>>>",trailingBits);

      trailingBits.push([outputString])

      return recursiveMap(trailingBits, outputString)
      // return outputString
    }
    console.log("first input nestedArrays >>>>",nestedArrays);
    // console.log("nestedArrays[1]",nestedArrays[1]);
    // console.log("nestedArrays[0]",nestedArrays[0]);
    trailingBits.push(nestedArrays[0])
    return recursiveMap(nestedArrays[1],outputString,trailingBits);
    // return recursiveMap()

    // return recursiveMap(nestedArrays,outputString)




    // return outputString
  }

  return recursiveMap(relevantPiece,output,[]);
}

// console.log("ababab >>>>>>>>>",solve("(ab)"))
// console.log("ababab >>>>>>>>>",solve("3(ab)"))
// console.log("aababab >>>>>>>>>",solve("a3(ab)"))

console.log("abbbabbb >>>>>>>",solve("2(a3(b))"))
// console.log("bccbccbcc >>>>>>",solve("3(b(2(c)))"));
// console.log("kabaccbaccbacc >",solve("k(a3(b(a2(c))))"))
