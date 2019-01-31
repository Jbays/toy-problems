
let input1 = ['star','rats','car','arc','arts','stars'];
let input2 = ['owls','slow','lows','buns','sunburn','snub','nubs'];

function anagramSort(array){
  let output = {};
  for ( let i = 0; i < array.length; i++ ) {
    let sorted = array[i].split('').sort((a,b)=>{return a.localeCompare(b)}).join('');

    if ( !output.hasOwnProperty(sorted) ) {
      output[sorted] = [array[i]];
    } else {
      output[sorted].push(array[i]);
    }

  }

  return output;
}

// console.log(anagramSort(input1));
console.log(anagramSort(input2));