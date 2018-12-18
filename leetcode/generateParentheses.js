//medium
//https://leetcode.com/problems/generate-parentheses/

/** 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * For example, given n = 3, a solution set is:
 * 
 * [
 *  "((()))",
 *  "(()())",
 *  "(())()",
 *  "()(())",
 *  "()()()"
 *  ]
 * */

var generateParenthesis = function(n) { 
  var res = [];
  bfs("", 0, 0);
  return res;
  function bfs(tmpStr, countL, countR){
    if(countL === n && countR === n){
      res.push(tmpStr);
      return;
    }
    if(countL !== n ){
      bfs(tmpStr + "(", countL + 1, countR);
    }
    if(countL > countR){
      bfs(tmpStr + ")", countL, countR + 1);
    }
  }
 };

function generateParentheses(number){
  let output = [];
  //generate all combinations
  
  placeBreadthFirst("",0,0);

  return output;
  
  function placeBreadthFirst(tempString,leftCount,rightCount){
    if ( leftCount === n && rightCount === n ) {
      output.push(tempString);
      return;
    }
    if ( leftCount !== n ) {
      placeBreadthFirst(tempString+"(",leftCount+1,rightCount);
    }
    if ( leftCount > rightCount ) {
      placeBreadthFirst(tempString+")",leftCount,rightCount+1);
    }
  }
}


generateParentheses(3);