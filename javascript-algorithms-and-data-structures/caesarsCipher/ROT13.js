function shiftCipher(msg, shift) {
  const alphabet = ['A', 'B', 'C', 'D', 'E',
                    'F', 'G', 'H', 'I', 'J',
                    'K', 'L', 'M', 'N', 'O', 
                    'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y',
                    'Z']
  let ROTMsg="";
  const arrayMsg = msg.split("");

  for (let i=0; i<arrayMsg.length; i++){
    const char = arrayMsg[i];
    const charInAlphabet = (/[a-z]/i).test(char)
    if (charInAlphabet){
      var index = alphabet.indexOf(char);
      const signal = shift/Math.abs(shift);
      if (index+shift >= 0){
        var newIndex = (index+shift)%alphabet.length
      } 
      else {
        var newIndex = alphabet.length - (signal*(index+shift))%alphabet.length
      }
      ROTMsg += alphabet[newIndex];
    } 
    else {
      ROTMsg += char;
    }
    // Verbose / Debugging :v
    // console.log(`${char}: ${(/[a-z]/i).test(char)}. ${index} => ${(index+shift)%alphabet.length} = ${alphabet[newIndex]}. ${ROTMsg}`); 
  }
  return ROTMsg;
}

function ROT13(msg) {
  return shiftCipher(msg, 13);
}

console.log(ROT13("SERR PBQR PNZC"));

