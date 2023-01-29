const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

  let newArr = [];
  let newArrMorse = [];
  let result = '';

  for (let i = 0; i < expr.length; i += 10) {
    newArr.push(expr.slice(i,i+10));
  }

  function pointDashDecoder(string) {

    let tmpString = '';

    for (let i = 0; i < string.length; i += 2) {
     if (string[i] === '0' && string[i+1] === '0') {
        tmpString += '';
      } else if (string[i] === '1' && string[i+1] === '0') {
        tmpString += '.';
      } else if (string[i] === '1' && string[i+1] === '1') {
        tmpString += '-';
      } else {
        tmpString = ' ';
      }
    }
    newArrMorse.push(tmpString);
  }

  function getDataFromMorseTable (element) {

    if (element === ' ') {
      result += element
    } else {
      result += MORSE_TABLE[element]
    }
    
  }

  newArr.map(pointDashDecoder);
  newArrMorse.map(getDataFromMorseTable);

  return result;
}

module.exports = {
    decode
}