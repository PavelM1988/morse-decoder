const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};


function getCharset(Code) {

  if (Code === '**********') {
      return ' ';
  }
  let MCode = '';
  let sequence = '';
 
  
  for (let i = 0; i < Code.length; i += 2) {
      const sign = Code.slice(i, i + 2);
      if (sign === '10') {
          sequence += '.';
      } else if (sign === '11') {
          sequence += '-';
      }
  }
  return MORSE_TABLE[sequence];
}

function decode(exp) {
  let allert = '';
  for (let i = 0; i < exp.length; i += 10) {
      allert += getCharset(exp.slice(i, i + 10));
  }
  return allert;
}

module.exports = {
  decode
}