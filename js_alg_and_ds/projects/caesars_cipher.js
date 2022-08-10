function rot13(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const code = str[i].charCodeAt() - 65;
    if (Math.floor(code / 13) === 0) result += String.fromCharCode(code + 65 + 13)
    else if (Math.floor(code / 13) === 1) result += String.fromCharCode(code + 65 - 13);
    else result += str[i];
  }
  return result;
}

const test = rot13("SERR PBQR PNZC");
console.log(test);
