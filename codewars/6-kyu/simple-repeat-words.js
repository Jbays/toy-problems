// https://www.codewars.com/kata/simple-repeated-words

// In this Kata,
//you will count the number of times the first string occurs in the second.

// solve("zaz","zazapulz") = 4
//because they are ZAZapulz, ZAzapulZ, ZazApulZ, zaZApulZ


function solve(a,b) {
  let count = 0;
  let donut = a;

  let letterSplit = a.split("");
  let filtered = b.split("").filter((letter)=>{
    for ( let i = 0; i < letterSplit.length; i++ ) {
      if ( letter === letterSplit[i] ){
        return letter;
      }
    }
  })

  let outgoing = [];

  letterSplit.forEach((letter,firstIndex)=>{
    let matches = [];

    for ( let i = 0; i < filtered.length; i++ ) {
      if ( matches.length >= 3 ) {
        outgoing.push(matches);
        matches = [];
        break;
      }
      if ( letter === filtered[i] ) {
        matches.push(i);
        break;
      }
    }
    console.log("matches",matches)
  })
  console.log(outgoing)


  console.log('filtered',filtered)

}

console.log("4",solve("zaz","zazapulz"));
// console.log("3",solve("rat","ratatoulie"));
// console.log("7",solve("kata","katakatak"));
// console.log("11",solve("code","codeodecode"));
// console.log("7",solve("kata","kataxxxxkatak"));
// console.log("11",solve("code","cozzdezodeczzode"));
