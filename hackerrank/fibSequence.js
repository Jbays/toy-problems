function fibSequence(array,n){
  if ( n === 2 ) {
    return array;
  }

  let sum = (array.slice(-2)).reduce((a,b)=>{return a+b});
  array.push(sum)

  return fibSequence(array,n-1)
}

// console.log(fibSequence([0,1],4));
console.log(fibSequence([0,1],0));
// console.log(fibSequence([0,1],100));
// console.log(fibSequence([0,1],));
