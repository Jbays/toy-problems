// 8 kyu Cat years, Dog years
// I have a cat and a dog.
//
// I got them at the same time as kitten/puppy. That was humanYears years ago.
//
// Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

function humanYearsCatYearsDogYears(years){
  let catYears = 15
  let dogYears = 15

  if ( years === 1 ) {
    return [years,catYears,dogYears]
  }

  if ( years === 2 ) {
    return [years, catYears+9,dogYears+9]
  }

  return [years,(catYears+(years-2)*4)+9,(dogYears+(years-2)*5)+9]
}

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(3));
console.log(humanYearsCatYearsDogYears(4));
