function buddy(start,limit) {
  let buddyN = 0;
  let buddyM = 0;

  let startArray = [];
  for (let i = start;i<=limit;i++) {
    startArray.push(i);
  }

  // console.log("startArray",startArray);

  for (let j=0;j<startArray.length;j++) {
    let n = startArray[j];
    let nDivisorsSum = 0;
    console.log("this is n",n)
    for (let i=0;i<n;i++) {
      if (n%i===0) {
        nDivisorsSum += i;
      }
    }
    console.log("nDivisorsSum",nDivisorsSum)

    //what's the significance?
    console.log("nDivisorsSum-1>n",nDivisorsSum-1>n)
    if (nDivisorsSum-1 > n) {

      let mDivisorsSum = 0
      for (let i=0;i<(nDivisorsSum-1);i++) {
        if ((nDivisorsSum-1)%i===0) {
          mDivisorsSum += i;
        }
      }

      if (mDivisorsSum === n+1) {
        buddyN = n;
        buddyM = nDivisorsSum-1;
        break;
      }
    }
  }

  return buddyM>0?[buddyN, buddyM]:"Nothing";
}
console.log(buddy(23, 4669), [48, 75] );
// console.log(buddy(4952, 6539), [5775, 6128] );
// console.log(buddy(381, 4318), [1050, 1925] );
// console.log(buddy(2382, 3679), "Nothing" );
