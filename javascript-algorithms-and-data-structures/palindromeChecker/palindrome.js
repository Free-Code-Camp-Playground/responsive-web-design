function palindrome(str) {
  const checkStr = str.toUpperCase().match(/[a-z0-9]/ig)
  //TODO: Treat Null checkStr here
  //      Both by empty input of by not matching anything

  for (let i = 0; i<Math.floor(checkStr.length/2); i++){
    if (checkStr[i] != checkStr[checkStr.length-1-i]){return false}
  }
  return true;
}

console.log(palindrome(process.argv[2]));
