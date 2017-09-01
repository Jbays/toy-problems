// Given a string of integers,
//count how many times that integer repeats itself,
//then return a string showing the count and the integer.
//
// Example: countMe('1123') (count_me in Ruby)
//
// Here 1 comes twice so <count><integer> will be "21"
// then 2 comes once so <count><integer> will be "12"
// then 3 comes once so <count><integer> will be "13"
// hence output string will be "211213".
//
// Similarly countMe('211213') will return '1221121113'
//(1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)
//
// Return "" for empty, nil or non numeric strings

function countMe(data){
  let split = data.split('');
  let uniques = [];
  let output = '';

  for ( let i = 0; i < split.length; i++ ){
    if ( !parseInt(split[i]) ) {
      return '';
    }
  }

  split.forEach((number)=>{
    if ( uniques.indexOf(number) === -1 ) {
      uniques.push(number);
    }
  });

  uniques.forEach((uniqElem)=>{
    let count = 0;

    for ( let i = 0; i < split.length; i++ ) {
      if ( uniqElem === split[i] ) {
        count++
      }
    }

    let outputPhrase = count.toString() + uniqElem.toString();
    output = output+outputPhrase
  })

  return output;
}

// countMe("1123");

// console.log(countMe("1"));
// Test.assertEquals(countMe('1'), '11');

// console.log(countMe("1123"));
// Test.assertEquals(countMe('1123'), '211213');

// console.log(countMe("11"));
// Test.assertEquals(countMe('11'), '21');

// console.log(countMe("a"));
// Test.assertEquals(countMe('a'), '');

// console.log(countMe("21"));
// Test.assertEquals(countMe('21'), '1211');

console.log(countMe("a123"));
// Test.assertEquals(countMe('a123'), '');

// Test.assertEquals(countMe('1211'), '111221');
// Test.assertEquals(countMe('12322212223443'), '111213321132132413');
// Test.assertEquals(countMe(''), '');

// console.log(countMe("123a"));
// Test.assertEquals(countMe('123a'), '');
