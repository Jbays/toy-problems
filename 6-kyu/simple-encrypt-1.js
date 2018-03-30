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
  if (text === "") {return ""}
  else if ( text === null) {return null};
}

function decrypt(encryptedText, n) {
  if (encryptedText === "") {return ""}
  else if ( encryptedText === null) {return null};

}


// Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
// Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
// Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
// Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
// Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
// Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
// Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
// Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
// Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
// Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
// Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
// Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
// Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
// Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

//working
console.log(encrypt("", 0) === "");
console.log(decrypt("", 0) === "");
console.log(encrypt(null, 0) === null);
console.log(decrypt(null, 0) === null);
