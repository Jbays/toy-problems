// https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/train/javascript

// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!
//
// Examples:
//
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

function encrypt(text, n) {
  if ( text === "" ) { return "" }
  else if ( text === null ) { return null }
  else if ( n < 1 ) { return text };

  let odds = "";
  let evens = "";

  text.split('').forEach((letter,index)=>{
    if ( index % 2 !== 0 ) { odds += letter; }
    else { evens += letter };
  })

  if ( n === 1 ) { return odds+evens };

  return encrypt(odds+evens,n-1);
}

function decrypt(encryptedText, n) {
  if ( encryptedText === "" ) { return "" }
  else if ( encryptedText === null ) { return null }
  else if ( n < 1 ) { return encryptedText };

  let output = "";
  let halfwayMark = Math.ceil(((encryptedText.length-1)/2));
  let firstHalf = encryptedText.slice(halfwayMark);
  let secondHalf = encryptedText.slice(0,halfwayMark);

  for ( let i = 0; i < halfwayMark+1; i++ ) {
    let firstWrite = firstHalf[i] ? firstHalf[i] : "";
    let secondWrite = secondHalf[i] ? secondHalf[i] : "";

    output += firstWrite+secondWrite;
  }

  if ( n === 1 ) { return output };

  return decrypt(output,n-1);
}


//working
// console.log(encrypt("", 0) === "");
// console.log(encrypt(null, 0) === null);
// console.log(encrypt("This is a test!", -1) === "This is a test!");
// console.log(encrypt("This is a test!", 0) === "This is a test!");
// console.log(encrypt("This is a test!", 1) === "hsi  etTi sats!");
// console.log(encrypt("This kata is very interesting!", 1) === "hskt svr neetn!Ti aai eyitrsig");
// console.log(encrypt("This is a test!", 2) === "s eT ashi tist!");
// console.log(encrypt("This is a test!", 3) === " Tah itse sits!");
// console.log(encrypt("This is a test!", 4) === "This is a test!");

// console.log(decrypt("This is a test!", -1) === "This is a test!");
// console.log(decrypt("This is a test!", 0) === "This is a test!");
// console.log(decrypt("hsi  etTi sats!", 1) === "This is a test!");
// console.log(decrypt("s eT ashi tist!", 2) === "This is a test!");
// console.log(decrypt(" Tah itse sits!", 3) === "This is a test!");
// console.log(decrypt("This is a test!", 4) === "This is a test!");

console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

//working!!
// console.log(decrypt("", 0) === "");
// console.log(decrypt(null, 0) === null);
