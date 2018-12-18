/**

  There is a robot starting at position (0, 0), the origin, on a 2D plane. 
  Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

  The move sequence is represented by a string, and the character moves[i] represents its ith move. 
  Valid moves are R (right), L (left), U (up), and D (down). 
  If the robot returns to the origin after it finishes all of its moves, return true. 
  Otherwise, return false.

  Note: The way that the robot is "facing" is irrelevant. 
  "R" will always make the robot move to the right once, "L" will always make it move left, etc. 
  Also, assume that the magnitude of the robot's movement is the same for each move.

*/

//time complexity is O(n) where n is the total number of moves --> aka, the length of the input string
function judgeCircle(moves) {
  let moveTally = {
    U:0,
    D:0,
    L:0,
    R:0
  }

  for ( let i = 0; i < moves.length; i++ ) {
    if ( moveTally.hasOwnProperty([moves[i]]) ) {
      moveTally[moves[i]]++;
    }
  }

  return (moveTally.D-moveTally.U) === 0 && (moveTally.L-moveTally.R) === 0
};

console.log(judgeCircle('UD'));
console.log(judgeCircle('LL'));