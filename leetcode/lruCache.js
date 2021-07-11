/**

  medium

  https://leetcode.com/problems/lru-cache/

  LRU Cache

  Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

  Implement the LRUCache class:

  * LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
  * int get(int key) Return the value of the key if the key exists, otherwise return -1.
  * void put(int key, int value) Update the value of the key if the key exists. 
    * Otherwise, add the key-value pair to the cache. 
    * If the number of keys exceeds the capacity from this operation, evict the least recently used key.

  Input
  ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
  [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
  Output
  [null, null, null, 1, null, -1, null, -1, 3, 4]
  
  Explanation
  LRUCache lRUCache = new LRUCache(2);
  lRUCache.put(1, 1); // cache is {1=1}
  lRUCache.put(2, 2); // cache is {1=1, 2=2}
  lRUCache.get(1);    // return 1
  lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
  lRUCache.get(2);    // returns -1 (not found)
  lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
  lRUCache.get(1);    // return -1 (not found)
  lRUCache.get(3);    // return 3
  lRUCache.get(4);    // return 4

  Follow up:
  Could you do get and put in O(1) time complexity?
*/

// []
var LRUCache = function(capacity){
  this.map = new Map();
  this.capacity = capacity;
}

LRUCache.prototype.get = function(key){
  const mapHasKey = this.map.has(key);

  if ( mapHasKey ) {
    const value = this.map.get(key);
    
    this.map.delete(key)
    this.map.set(key,value);

    return value;
  }

  return -1
}

LRUCache.prototype.put = function(key,val){
  const seenKeyBefore = this.map.has(key);

  if ( !seenKeyBefore ){
    if ( (this.map.size + 1) > this.capacity ){
      const key = this.map.entries().next().value[0]
      this.map.delete(key);
    }
  }

  this.map.delete(key);
  this.map.set(key,val)

  // if we have seen before, then two things:
  // 1. put the key/val at the back of the queue
  // 2. update the key w/the new incoming value

  // if we haven't seen before,
  // 0. check for overflow
  // 1. put the key/val at the back of the queue
  // 2. add key/val to the Map


}

// var LRUCache = function(capacity) {
//   // least recently used is at the front of the line
//   // most recently used is at the back of the line
//   this.queue = new Set();
//   this.map = new Map();
//   this.capacity = capacity;
// };

// LRUCache.prototype.get = function(key) {
//   const mapHasKey = this.map.has(key);

//   if ( mapHasKey ) {
//     this.queue.delete(key);
//     this.queue.add(key);

//     return this.map.get(key);
//   }

//   return -1;
// };

// LRUCache.prototype.put = function(key, value) {
//   const seenKeyBefore = this.queue.has(key);
//   // deletion logic to prevent overflow // keep the data structure consistent with "LRU"
//   // if seen key before, delete it from the queue
//   if ( seenKeyBefore ) {
//     this.queue.delete(key);
//   } else 
//   // this will remove LRU PRIOR to the insertion / reinsertion of the new key+value pair
//   if ( (this.queue.size + 1) > this.capacity ) {
//     const keyForLRU = this.queue.entries().next().value[0];
//     this.queue.delete(keyForLRU);
//     this.map.delete(keyForLRU);
//   }

//   // this "puts" (overwrites) key+value in map (effectively a delete)
//   this.map.set(key,value);
//   // reinserting key at back of queue
//   this.queue.add(key);

//   return null;
// };

let lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // cache is {1=1}
// console.log(lRUCache.put(5, "bool")); // cache is {1=1}
console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
// console.log(lRUCache.put(3, 3)); // cache is {1=1, 2=2}
console.log(lRUCache.get(1));    // return 1
console.log(lRUCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));    // returns -1 (not found)
console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
// console.log(lRUCache.get(4));
console.log('lRUCache after 4 get',lRUCache)


// var LRUCache = function(capacity) {
//     this.cache = [];
//     this.capacity = capacity;
//     return null;
// };

// LRUCache.prototype.get = function(key) {
//     for ( let i = 0; i < this.cache.length; i++ ) {
//         if ( Array.isArray(this.cache[i]) ) {
//             let tuple = this.cache[i];
            
//             if ( tuple[0] === key ) {
//                 const firstHalfOfCache = this.cache.slice(0,i);
//                 const secondHalfOfCache = this.cache.slice(i+1,this.cache.length);
                
//                 this.cache = firstHalfOfCache.concat(secondHalfOfCache);
//                 this.cache.push(tuple);
//                 return tuple[1]
//             }
//         }
//     }
//     return -1
// };

// LRUCache.prototype.put = function(key, value) {
//   for ( let i = 0; i < this.cache.length; i++ ) {
//         if ( Array.isArray(this.cache[i]) ) {
//             let tuple = this.cache[i]
//             if ( tuple[0] === key ) {
//                 const firstHalfOfCache = this.cache.slice(0,i);
//                 const secondHalfOfCache = this.cache.slice(i+1,this.cache.length);
                
//                 this.cache = firstHalfOfCache.concat(secondHalfOfCache);
//                 break;
//             }
//         }
//     }
    
//     this.cache.push([key,value]);

//     if ( this.cache.length > this.capacity ) {
//       this.cache.shift();
//     }
    
//     return null
// };

// let lRUCache = new LRUCache(2);
// console.log(lRUCache.put(1, 1)); // cache is {1=1}
// console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
// console.log(lRUCache.get(1));    // return 1
// console.log(lRUCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(2));    // returns -1 (not found)
// console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(lRUCache.get(1));    // return -1 (not found)
// console.log(lRUCache.get(3));    // return 3
// console.log(lRUCache.get(4));
// console.log('lRUCache after 4 get',lRUCache)
