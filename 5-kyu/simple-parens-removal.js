// https://www.codewars.com/kata/simple-parenthesis-removal/train/javascript

// In this Kata, you will be given a mathematical string and your task will be to remove all braces as follows:
//
// solve("x-(y+z)") = "x-y-z"
// solve("x-(y-z)") = "x-y+z"
// solve("u-(v-w-(x+y))-z") = "u-v+w+x+y-z"
// solve("x-(-y-z)") = "x+y+z"
// There are no spaces in the expression. Only two operators are given: "+" or "-".

// function solve(s) {
//   let arrayOfCharacters = s.split('')
//   if ( arrayOfCharacters.indexOf('(') === -1 ) {
//     return s;
//   }
//
//   let removeParens = removeParentheses(s);
//   let output = "";
//
//   function removeParentheses(string){
//     if ( string[0] === "(" ) {
//       return removeParentheses(string.slice(1,string.length-1));
//     }
//     return string;
//   }
//
//   let distributedNegs = findNegatives(removeParens);
//
//   function findNegatives(string){
//     let start = null;
//     let sliced = null;
//     for ( let i =0; i < string.length; i++ ) {
//       if ( string[i] === "-" ) {
//         start = string.indexOf("(");
//         let end = string.indexOf(")")+1;
//         sliced = string.slice(start,end)
//         // console.log("sliced",sliced)
//         break;
//       }
//     }
//
//     return string.slice(0,start-1)+sliced.replace(/-/g,"+");
//   }
//
//   return distributedNegs.split('').filter((item)=>{
//       if (item !== "(" && item !== ")"){
//         return item;
//       }
//     }).join('');
// }

function solve(s) {
  let beginOfCenter = s.lastIndexOf('(')
  let endOfCenter = s.indexOf(')')
  let center = s.slice(beginOfCenter+1,endOfCenter);
  // let remnant = s.slice(0,endOfCenter-1).split('').reverse().join('')
  let remnant = s.slice(0,endOfCenter-2)

  if ( s.length < 3 ) { return s }

  function distributedNegatives(remainder,centerPoint){
    console.log("remainder",remainder)
    console.log("centerPoint",centerPoint)
    if ( remainder.length === 1 ) {
      return remainder+centerPoint;
    }
    if ( centerPoint.length === 1 && remainder[remainder.length-1] !== "+" ) {
      centerPoint = "+"+centerPoint;
    }

    for ( let i = remainder.length-1; i >= 0; i-- ){
      if ( remainder[i] !== "(" ){
        if ( remainder[i] === "-" ){
          centerPoint = centerPoint.split('').map((letter)=>{
            if ( letter === "-" ){ return "+" }
            else if ( letter === "+" ){ return "-" }
            else { return letter }
          }).join('')
        }
        if ( remainder[i] === "+" || remainder[i].match(/[a-zA-Z]/) ) {
          centerPoint = remainder[i]+centerPoint;
        }
      }
    }
    return (centerPoint.length === 2 && centerPoint[0] === "+") ? centerPoint[1] : centerPoint
  }

  return distributedNegatives(remnant,center);
}

//working
// console.log(solve("-x"),"-x");
// console.log(solve("a-(b)"),"a-b");
// console.log(solve("a-(-b)"),"a+b");
// console.log(solve("x-(-y-z)"),"x+y+z");
// console.log(solve("(((((((((-((-(((n))))))))))))))"),"n");
// console.log(solve("a+(b)"),"a+b");


//not working

//untested
console.log(solve("a+(-b)"),"a-b");
// (solve("(((a-((((-(-(f)))))))))"),"a-f");
// (solve("((((-(-(-(-(m-g))))))))"),"m-g");
// (solve("(((((((m-(-(((((t)))))))))))))"),"m+t");
// (solve("-(-(x))"),"x");
// (solve("-((-x))"),"x");
// (solve("-(-(-x))"),"-x");
// (solve("-(-(x-y))"),"x-y");
// (solve("-(x-y)"),"-x+y");
// (solve("x-(y+z)"),"x-y-z");
// (solve("x-(y-z)"),"x-y+z");
// (solve("x-(-((-((((-((-(-(-y)))))))))))"),"x-y");
// (solve("u-(v-w+(x+y))-z"),"u-v+w-x-y-z");
// (solve("x-(s-(y-z))-(a+b)"),"x-s+y-z-a-b");
// (solve("u+(g+v)+(r+t)"),"u+g+v+r+t");
// (solve("q+(s-(x-o))-(t-(w-a))"),"q+s-x+o-t+w-a");
// (solve("u-(v-w-(x+y))-z"),"u-v+w+x+y-z");
// (solve("v-(l+s)-(t+y)-(c+f)+(b-(n-p))"),"v-l-s-t-y-c-f+b-n+p");
