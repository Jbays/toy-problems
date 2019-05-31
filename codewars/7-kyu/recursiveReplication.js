function replicate(times, number) {
  let output = []
  if (!times || times <= 0) { return output }

  return recursiveAdder(times,output);

  function recursiveAdder(times,outputArr){
    if ( times > 0 ) {
      outputArr.push(number)
      return recursiveAdder(--times,outputArr);
    } else {
      return outputArr
    }
  }
}

console.log(replicate(-1, 12))//=>[];
console.log(replicate(0, 12)) //=>[];
console.log(replicate(3, 5))  //=>[5, 5, 5];
console.log(replicate(5, 1))  //=>[1, 1, 1, 1, 1];
console.log(replicate(8, 0))  //=>[0, 0, 0, 0, 0, 0, 0, 0]; 