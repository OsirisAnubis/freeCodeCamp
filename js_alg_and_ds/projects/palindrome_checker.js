function palindrome(str) {
  const correctStr = str.match(/[a-zA-Z0-9]/g, '').join('').toLowerCase();
  for (let i = 0; i < Math.floor(correctStr.length / 2); i++) {
    //console.log(str[i], str[str.length - i - 1]);
    if (correctStr[i] === correctStr[correctStr.length - i - 1]) continue;
    return false;
  }
  return true;
}

const test = palindrome("0_0 (: /-\ :) 0-0");
console.log(test);
