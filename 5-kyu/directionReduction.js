//https://www.codewars.com/kata/directions-reduction/train/javascript

//Once upon a time, on a way through the old wild west, …
//… a man was given directions to go from one point to another.
//The directions were "NORTH", "SOUTH", "WEST", "EAST".
//Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
//Going to one direction and coming back the opposite direction is a needless effort.
//Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst

function dirReduc(array){
  const obj = {
    'NORTH':'SOUTH',
    'SOUTH':'NORTH',
    'EAST':'WEST',
    'WEST':'EAST'
  }

  let changed = false;
  let coord = [];

  for ( let i = 0; i < array.length; i++ ) {
    let cancelingDirection = obj[array[i]];

    if ( array[i+1] === cancelingDirection ) {
      i++;
      changed = true;
    } else {
      coord.push(array[i]);
    }
  }
  return (changed) ? dirReduc(coord) : coord;
}

//original


// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
// console.log(dirReduc([ "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
// console.log(dirReduc(['EAST', 'EAST', 'WEST', 'NORTH']),['EAST', 'NORTH']);
// console.log(dirReduc(['EAST', 'EAST', 'WEST', 'NORTH', 'WEST', 'EAST', 'EAST', 'SOUTH', 'NORTH', 'WEST']),['EAST', 'NORTH']);

//failing

//tested
console.log(dirReduc(['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH']),['NORTH', 'EAST'])
// console.log(dirReduc(['EAST', 'WEST', 'SOUTH', 'NORTH', 'NORTH', 'EAST', 'EAST', 'WEST', 'NORTH', 'SOUTH']),['NORTH', 'EAST'])
// console.log(dirReduc(['SOUTH', 'NORTH', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'NORTH', 'NORTH', 'NORTH', 'EAST', 'WEST', 'SOUTH', 'NORTH', 'EAST', 'WEST']),['NORTH', 'NORTH', 'NORTH'])

//untested
// console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'SOUTH', 'SOUTH', 'WEST', 'WEST', 'EAST', 'SOUTH', 'NORTH', 'EAST', 'WEST']),['SOUTH', 'WEST'])
// console.log(dirReduc(['EAST', 'WEST', 'NORTH', 'SOUTH', 'WEST', 'NORTH', 'WEST', 'EAST', 'NORTH', 'SOUTH']),['WEST', 'NORTH'])
// console.log(dirReduc(['NORTH', 'SOUTH', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'EAST', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'SOUTH', 'WEST', 'EAST']),['EAST', 'SOUTH'])