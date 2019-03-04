/*

  Linked List
    Implement a linked-list.

*/

// function Node(value){
//   this.value = value;
//   this.next = null;
// }

// function LinkedList(initialValue=null){
//   this.head = new Node(initialValue);
//   this.tail = this.head;
// }

// LinkedList.prototype.addToTail = function(value){
//   const newTailNode = new Node(value);
//   if ( !this.head.value ) {
//     this.head = newTailNode;
//   } else {
//     this.head.next = newTailNode;
//   }
//   this.tail = newTailNode;
// }

// LinkedList.prototype.removeHead = function(){
//   this.head = this.head.next;

//   if ( !this.head ) {
//     this.tail = null;
//   }
// }

// LinkedList.prototype.contains = function(value){
//   let node = this.head;

//   while ( node ) {
//     if ( node.value === value ) {
//       return true;
//     }
//   }

//   return false;
// }

// function Node(value){
//   this.value = value || null;
//   this.next = null;
// }

// function LinkedList(initialValue){
//   this.head = new Node(initialValue);
//   this.tail = this.head;

//   this.containedValues = {};
//   if ( initialValue ) {
//     this.containedValues[initialValue] = true;
//   }
// }

// LinkedList.prototype.addToTail = function(value){
//   if ( this.head.value === null ) {
//     this.head.value = value;
//     this.tail = this.head;
//   } else {
//     this.tail.next = new Node(value);
//     this.tail = this.tail.next;
//   }
//   this.containedValues[value] = true;
// }

// LinkedList.prototype.removeHead = function(){
//   delete this.containedValues[this.head.value];
  
//   if ( this.head === this.tail ) {
//     this.tail = null;
//   }

//   this.head = this.head.next;
// }

// LinkedList.prototype.contains = function(value){
//   return !!this.containedValues[value];
// }

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(value=null){
    this.head = new Node(value);
    this.tail = this.head;
    this.listOfAllVals = {};
    this.listOfAllVals[value] = true;
  }

  addToTail(value){
    let newNode = new Node(value);
    this.listOfAllVals[value]= true;

    //either the head is blank
    if (!this.head.value){
      this.head = newNode;
      this.tail = newNode;
    } else {
    //or just set (1) tail.next to the newNode and
    //            (2) tail to tail.next
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    return newNode;
  }

  removeHead(){
    delete this.listOfAllVals[this.head.value];

    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
  }

  contains(value){
    return !!this.listOfAllVals[value];
  }

  reverse(){
    let containerArr = [];

    while (this.head){
      containerArr.unshift(this.head.value);
      this.removeHead();
    }

    let firstUp = containerArr.shift();
    let newLinkedList = new LinkedList(firstUp);
    
    for ( let i = 0; i < containerArr.length; i++ ) {
      newLinkedList.addToTail(containerArr[i]);
    }

    return newLinkedList;
  }
}

// let myLinkedList = new LinkedList(4);
// myLinkedList.addToTail(5);
// console.log(myLinkedList.contains(4));
// console.log(myLinkedList.contains(5));
// console.log(myLinkedList.contains(6));


let myLinkedList = new LinkedList(5);
myLinkedList.addToTail(8);
myLinkedList.addToTail(10);
myLinkedList.addToTail(12);
myLinkedList.removeHead();

let reversed = myLinkedList.reverse();
// myLinkedList.removeHead();

console.log('printout>>>',JSON.stringify(myLinkedList,null,2));
console.log('printout>>>',JSON.stringify(reversed,null,2));