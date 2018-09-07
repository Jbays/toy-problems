// https://www.codewars.com/kata/chocolate-party/train/javascript

// Class 3A are chocoholics, and they are excellent at sharing.
//
// If they work hard all week, they get a chocolate party on Friday!
//
// In the classroom, there are 6 tables. The first table has one bar of chocolate, the second table has two bars of chocolate, the third table has three bars and so on.
//
// The children enter the classroom one at a time. They must sit down at the table where they get the most chocolate. If there is a choice between two tables, they will prefer to sit at the table nearest to the door (the first table is closest and the sixth table is furthest from the door).
//
// For a given number of children, n, return an array that shows how many children are sitting at each table.
//
// e.g.
//
// n = 10
//
// Child 1 sits at table 6, getting 6 bars of chocolate
// Child 2 sits at table 5, getting 5 bars of chocolate
// Child 3 sits at table 4, getting 4 bars of chocolate
// Child 4 sits at table 3, getting 3 bars of chocolate
// Child 5 sits at table 6, 2 children each get 3 bars of chocolate
// Child 6 sits at table 5, 2 children each get 2.5 bars of chocolate
// Child 7 sits at table 2, getting 2 bars of chocolate
// Child 8 sits at table 4, 2 children each get 2 bars of chocolate
// Child 9 sits at table 6, 3 children each get 2 bars of chocolate
// Child 10 sits at table 5, 3 children each get 1 and two-thirds bars of chocolate
//
// result = [0, 1, 1, 2, 3, 3]
//
// Your solution will be tested with random integer and non-integer values from -10000 to 10000. The test input will always be a valid number.
//
// If the number of children is not a valid number of children (is zero, is negative, or is not a whole integer) or there is no input, your function should return null.

function shareChocolate(n) {
  if ( n < 1 || !Number.isInteger(n) ) { return null }
  const initTables = [1,2,3,4,5,6];
  let bars_avail = [1,2,3,4,5,6];
  let seating = [0,0,0,0,0,0]

  //each child should visit every table
  //then should check how many children are sitting at the table
  //(and calculate how much chocolate they'll get)

  //a child needs to know (1) how many chocolate bars are at the table
  //                  AND (2) how many children are sitting at the table

  //a child should choose the most chocolate
  //with a preference to

  for ( let i = 0; i < n; i++ ) {
    let maxBars = Math.max(...bars_avail)
    let table = bars_avail.indexOf(maxBars);

    seating[table]++;
    bars_avail[table] = initTables[table]/(seating[table] + 1);
  }
  return seating;
}

// console.log(shareChocolate(0), null, 'Your function should return null if n is not a valid number of children')
// console.log(shareChocolate(-1), null, 'Your function should return null if n is not a valid number of children')
// console.log(shareChocolate(1.25), null, 'Your function should return null if n is not a valid number of children')
// console.log(shareChocolate(1), [0, 0, 0, 0, 0, 1], 'The child should sit at the table with the most chocolate')
// console.log(shareChocolate(4), [0, 0, 1, 1, 1, 1], 'If there are two or more tables where the child could get the same amount of chocolate, the child will go to the table nearest the door')
console.log(shareChocolate(10), [0, 1, 1, 2, 3, 3])
// console.log(shareChocolate(50), [2, 5, 7, 10, 12, 14])
