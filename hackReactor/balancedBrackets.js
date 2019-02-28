/*

  Balanced Brackets

    Given a string, return true if 
      its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] 
      would be considered valid in code and mathematics (is balanced).

    Examples
      Input	
      str: "(x + y) - (4)"	
      
      Output
        true
      
      Input	
        str:"(((10 ) ()) ((?)(:)))"	
      Output
        true
      
      Input	
        str:"[{()}]"	
      Output
        true
      
      Input	
        str: "(50)("	
      Output
        false
      
      Input	
        str: "[{]}"	
      Output
        false
*/

function isBalanced(str) {
  const open = {
    '[': ']',
    '(': ')',
    '{': '}'
  }
  const closed = {
    '}': '{',
    ']': '[',
    ')': '('
  }

  let count = 0;
  let allOpenBracketsStack = [];

  for (let i = 0; i < str.length; i++) {
    if (open[str[i]]) {
      count++;
      allOpenBracketsStack.push(str[i])
    }
    if (closed[str[i]]) {
      if (closed[str[i]] !== allOpenBracketsStack[allOpenBracketsStack.length - 1]) {
        return false;
      }
      count--;
      allOpenBracketsStack.pop();
    }
    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

console.log(isBalanced("(x + y) - (4)"));
console.log(isBalanced("(((10 ) ()) ((?)(:)))"));
console.log(isBalanced("[{()}]"));
console.log(isBalanced("(50)("));
console.log(isBalanced("[{]}"));
console.log(isBalanced("[[[{{{((()))}}}]]]"));

console.log(isBalanced("(x + y) - (4)"));
console.log(isBalanced("(((10 ) ()) ((?)(:)))"));
console.log(isBalanced("[{()}]"));
console.log(isBalanced("(50)("));
console.log(isBalanced("[{]}"));