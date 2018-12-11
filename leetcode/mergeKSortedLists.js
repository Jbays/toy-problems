/**

  hard

  23. Merge k Sorted Lists

  https://leetcode.com/problems/merge-k-sorted-lists/

  Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

  Example:

  Input:
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  Output: 1->1->2->3->4->4->5->6
*/

function mergeKLists(array){
  let output = '';
  let firstAndArray = findFirstInLine(array);

    while ( firstAndArray[1].length !== 0 ) {
      output += firstAndArray[0].shift() + '->';
      firstAndArray = pullAndPopulate(firstAndArray);
      
      let lastEntryCheck = firstAndArray[1].slice(-1)[0];
      
      if ( lastEntryCheck === '' ) {
        return output.concat(firstAndArray[0].join('->'));
      }
  } 

  //removes value from linked list
  //and places into priority queue
  //sort queue
  function pullAndPopulate(arrayOfArrays){
    for ( let i = 0; i < arrayOfArrays[1].length; i++ ) {
      let proposedList = arrayOfArrays[1][i].split('->');
      if ( proposedList[0] ) {
        arrayOfArrays[0].push(proposedList.shift())
        arrayOfArrays[0] = arrayOfArrays[0].sort((a,b)=>{return a-b});
        arrayOfArrays[1][i] = proposedList.join('->')
        return arrayOfArrays
      } 
    }

  }

  //outputs 
  function findFirstInLine(array){
    let outputFirsts = [];
    let outputReducedArray = [];
    for ( let i = 0; i < array.length; i++ ) {
      let peek = array[i].split('->');
      if ( peek.length > 0 ){
        outputFirsts.push(peek.shift());
      }
      outputReducedArray.push(peek.join('->'));
    }
    return [outputFirsts.sort((a,b)=>{return a-b;}),outputReducedArray];
  }
}

class LinkedList{
  constructor(){
    this.root = {};
  }

  wantToAddNode(futureNodeVal){
    if ( !this.root.value ){
      this.root = new Node(futureNodeVal);
    } else {
      console.log('bingo!')
      return this.appendNode(this.root,futureNodeVal);
    }
  }
  appendNode(wholeNode,futureNodeVal){
    if ( wholeNode.next ) {
      return this.appendNode(wholeNode.next,futureNodeVal);
    }
    wholeNode.next = new Node(futureNodeVal);
    return 1;
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

let myLinkedList1 = new LinkedList();
myLinkedList1.wantToAddNode(1)
myLinkedList1.wantToAddNode(4)
myLinkedList1.wantToAddNode(5)
console.log(myLinkedList1);

let input1 = [
  '1->4->5',
  '1->3->4',
  '2->6'
]

console.log(mergeKLists(input1));