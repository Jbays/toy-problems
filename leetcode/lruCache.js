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

var LRUCache = function(capacity) {
    this.cache = [];
    this.capacity = capacity;
    return null;
};

LRUCache.prototype.get = function(key) {
    for ( let i = 0; i < this.cache.length; i++ ) {
        if ( Array.isArray(this.cache[i]) ) {
            let tuple = this.cache[i];
            
            if ( tuple[0] === key ) {
                const firstHalfOfCache = this.cache.slice(0,i);
                const secondHalfOfCache = this.cache.slice(i+1,this.cache.length);
                
                this.cache = firstHalfOfCache.concat(secondHalfOfCache);
                this.cache.push(tuple);
                return tuple[1]
            }
        }
    }
    return -1
};

LRUCache.prototype.put = function(key, value) {
  for ( let i = 0; i < this.cache.length; i++ ) {
        if ( Array.isArray(this.cache[i]) ) {
            let tuple = this.cache[i]
            if ( tuple[0] === key ) {
                const firstHalfOfCache = this.cache.slice(0,i);
                const secondHalfOfCache = this.cache.slice(i+1,this.cache.length);
                
                this.cache = firstHalfOfCache.concat(secondHalfOfCache);
                break;
            }
        }
    }
    
    this.cache.push([key,value]);

    if ( this.cache.length > this.capacity ) {
      this.cache.shift();
    }
    
    return null
};

let lRUCache = new LRUCache(2);
console.log(null);
console.log(lRUCache.put(1, 1)); // cache is {1=1}
console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
console.log(lRUCache.get(1));    // return 1
console.log(lRUCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));    // returns -1 (not found)
console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));
console.log('lRUCache after 4 get',lRUCache)



// class LRUCache {

//   constructor(size){
//     this.cache = [];
//     this.capacity = size;
//   }


//   put(key,val){
//     // for UPTO each of the elements in the cache
//     for ( let i = 0; i < this.cache.length; i++ ) {
      
//       // if this element in the cache is an array (exists)
//       if ( Array.isArray(this.cache[i]) ) {
        
//         // if this array's first value is equal to the key being "put", then delete it from the queue
//         if ( this.cache[i][0] === key ) {
//           const firstHalfOfCache = this.cache.slice(0,i)
//           const secondHalfOfCache = this.cache.slice(i+1,this.cache.length);

//           this.cache = firstHalfOfCache.concat(secondHalfOfCache);
//           break;
//         }
//       }
//     }

//     // insert [key,val] at end of queue
//     this.cache.push([key,val]);

//     if ( this.cache.length > this.capacity ) {
//       // remove the first element from the queue
//       this.cache.shift();
//     }

//     return null;
//   }

//   get(num){
//     for ( let i = 0; i < this.cache.length; i++ ) {
      
//       // if this element in the cache is an array (exists)
//       if ( Array.isArray(this.cache[i]) ) {
//         let tuple = this.cache[i];
        
//         // if this array's first value is equal to the key being "put", then delete it from the queue
//         if ( tuple[0] === num ) {
//           const firstHalfOfCache = this.cache.slice(0,i)
//           const secondHalfOfCache = this.cache.slice(i+1,this.cache.length);

//           this.cache = firstHalfOfCache.concat(secondHalfOfCache);
//           this.cache.push(tuple)
//           return tuple[1];
//         }
//       } else {
//         return -1;
//       }
//     }
//   }

// }

// let lRUCache = new LRUCache(2);

// lRUCache.put(1,1)
// console.log('lRUCache',lRUCache)
// lRUCache.put(2,2)
// console.log('lRUCache',lRUCache)
// lRUCache.get(1)
// console.log('lRUCache',lRUCache)
// lRUCache.put(3,3)
// console.log('lRUCache',lRUCache)
// console.log(lRUCache.get(2))
// console.log('lRUCache',lRUCache)
// lRUCache.put(4,4)
// console.log('lRUCache',lRUCache)
// lRUCache.get(1)
// console.log('lRUCache',lRUCache)
// lRUCache.get(3)
// console.log('lRUCacheee',lRUCache)
// lRUCache.get(4)
// console.log('lRUCache',lRUCache)
