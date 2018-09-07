// https://www.codewars.com/kata/fun-with-trees-max-sum/train/javascript

let TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

let root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));

function maxSum(input) {
  if ( !input ) { return null };

  let output = [];
  let left = [];
  let right = [];

  function findValues(tree,array){
    if ( tree.value ) {
      array.push(tree.value);
    }

    if ( tree.left ) {
      // output.push(tree.left);
      findValues(tree.left,left);
    }

    if ( tree.right ) {
      findValues(tree.right,right);
    }

  }

  findValues(input,output);


  console.log('output',output);
  console.log('left',left);
  console.log('right',right);


  // function findBottom(tree,array){
  //   output.push(tree.value);
  //
  //   console.log("tree",tree);
  //
  //   if ( tree.left && tree.right ) {
  //     return findBottom(tree.left,output) && findBottom(tree.right,output);
  //   } else if ( tree.left ) {
  //     return findBottom(tree.left);
  //   } else if ( tree.right ) {
  //     return findBottom(tree.right);
  //   }
  //   // if ( tree.left ) {
  //   //   return findBottom(tree.left);
  //   // } else if ( tree.right ) {
  //   //   return findBottom(tree.right);
  //   // }
  //
  // }
  //
  // findBottom(input);
  //
  // console.log(output);


  //reduce all arrays.  return the highest value.


  // return 0; // TODO: implementation
}

console.log("the correct answer is 33",maxSum(root))
// console.log("the correct answer is 33",33===maxSum(root))
