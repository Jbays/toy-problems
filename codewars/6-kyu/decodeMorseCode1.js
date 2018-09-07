const alphabet = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " ",
  "-·-·--": "!",
  "·-·-·-": ".",
  "--··--": ","
};

function decodeMorse(morseCode) {
  let whatever = morseCode.split(' ').map((codeLetter) => {
    return alphabet[codeLetter] ? alphabet[codeLetter].toUpperCase() : alphabet[codeLetter];
  }).join('')
  // return morseCode.split(' ').map((codeLetter) => {
  //   return alphabet[codeLetter] ? alphabet[codeLetter].toUpperCase() : ' ';
  // }).join('');

  console.log('this is whatver',whatever);
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');