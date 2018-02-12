// Given a string of words, you need to find the highest scoring word.
//
// Each letter of a word scores points according to
//it's position in the alphabet: a = 1, b = 2, c = 3 etc.
//
// You need to return the highest scoring word as a string.
//
// If two words score the same,
//return the word that appears earliest in the original string.
//
// All letters will be lowercase and all inputs will be valid.

function high(string){
  const letterConversion = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6,
    g:7,
    h:8,
    i:9,
    j:10,
    k:11,
    l:12,
    m:13,
    n:14,
    o:15,
    p:16,
    q:17,
    r:18,
    s:19,
    t:20,
    u:21,
    v:22,
    w:23,
    x:24,
    y:25,
    z:26
  }
  let highestSum = 0;
  let highestIndex = null;

  string.split(' ').forEach((word,index)=>{
    let sum = word.split('').map((letter)=>{
      return letterConversion[letter];
    }).reduce((a,b)=>{
      return a+b;
    },0)
    // let sum = converted.reduce((a,b)=>{ return a+b; })

    if ( sum > highestSum ) {
      highestSum = sum
      highestIndex = index;
    }
  })

  return string.split(' ')[highestIndex]
}


console.log(high('kb cd xh tl'));
// console.log(high('oefcj sfzzp ibwcy lrwpx'));
// console.log(high('wqgggqd abbdmce rdkautx azmpapz'));
// console.log(high('ppaxvkdipydgjiqdslpwonntif eiaxuylmfkyyxstyllnrmolndl woromhkdjuucmnwqgjdtrvucfy afaulykitkuymkbgrgvpdcghlq'));

// console.log(high('man i need a taxi up to ubud'), 'taxi');
// console.log(high('what time are we climbing up the volcano'), 'volcano')
// console.log(high('take me to semynak'), 'semynak')
