const convertPos = (num, base) => {
  const n0=base[0];
  const n1=base[1];
  const n2=base[2];
  switch(num){
    case 0:
      return ""
    case 1:
      return n0
    case 2:
      return n0+n0
    case 3:
      return n0+n0+n0
    case 4:
      return n0+n1
    case 5:
      return n1
    case 6:
      return n1+n0
    case 7:
      return n1+n0+n0
    case 8:
      return n1+n0+n0+n0
    case 9:
      return n0+n2
    default:
      return "\n ERROR (Even though this might never happen)\n"
  }
}

function convertToRoman(num) {
  let ret = ""
  let fNum = num;
  let currDigit;
  const length = num.toString().length;
  
  for(let i=length; i>=0; i--){
    if(i==4){
      currDigit = Math.floor(fNum/1000);
      if (currDigit > 3){
        return "\n ERROR: The thousend's digit should not be larger than 3 \n"
      };
      ret += convertPos(currDigit, ["M","",""]);
      fNum -= 1000*currDigit;
    } 
    else if(i==3){
      currDigit = Math.floor(fNum/100);
      ret += convertPos(currDigit, ["C","D","M"]);
      fNum -= 100*currDigit;
    } 
    else if(i==2){
      currDigit = Math.floor(fNum/10);
      ret += convertPos(currDigit, ["X","L","C"]);
      fNum -= 10*currDigit;
    } 
    else if(i==1){
      currDigit = Math.floor(fNum/1);
      ret += convertPos(currDigit, ["I","V","X"]);
      fNum -= 1*currDigit;
    }
  }
 return ret.toUpperCase();
}
console.log(convertToRoman(parseInt(process.argv[2])));
