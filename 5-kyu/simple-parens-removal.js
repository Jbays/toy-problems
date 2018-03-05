// https://www.codewars.com/kata/simple-parenthesis-removal/train/javascript

// In this Kata, you will be given a mathematical string and your task will be to remove all braces as follows:
//
// solve("x-(y+z)") = "x-y-z"
// solve("x-(y-z)") = "x-y+z"
// solve("u-(v-w-(x+y))-z") = "u-v+w+x+y-z"
// solve("x-(-y-z)") = "x+y+z"
// There are no spaces in the expression. Only two operators are given: "+" or "-".

function solve(s) {
  console.log("s",s);
}


console.log(solve("a-(b)"),"a-b");
// (solve("a-(-b)"),"a+b");
// (solve("a+(b)"),"a+b");
// (solve("a+(-b)"),"a-b");
// (solve("(((((((((-((-(((n))))))))))))))"),"n");
// (solve("(((a-((((-(-(f)))))))))"),"a-f");
// (solve("((((-(-(-(-(m-g))))))))"),"m-g");
// (solve("(((((((m-(-(((((t)))))))))))))"),"m+t");
// (solve("-x"),"-x");
// (solve("-(-(x))"),"x");
// (solve("-((-x))"),"x");
// (solve("-(-(-x))"),"-x");
// (solve("-(-(x-y))"),"x-y");
// (solve("-(x-y)"),"-x+y");
// (solve("x-(y+z)"),"x-y-z");
// (solve("x-(y-z)"),"x-y+z");
// (solve("x-(-y-z)"),"x+y+z");
// (solve("x-(-((-((((-((-(-(-y)))))))))))"),"x-y");
// (solve("u-(v-w+(x+y))-z"),"u-v+w-x-y-z");
// (solve("x-(s-(y-z))-(a+b)"),"x-s+y-z-a-b");
// (solve("u+(g+v)+(r+t)"),"u+g+v+r+t");
// (solve("q+(s-(x-o))-(t-(w-a))"),"q+s-x+o-t+w-a");
// (solve("u-(v-w-(x+y))-z"),"u-v+w+x+y-z");
// (solve("v-(l+s)-(t+y)-(c+f)+(b-(n-p))"),"v-l-s-t-y-c-f+b-n+p");
