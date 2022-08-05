function reverseString(str) {
  const len = str.length;
  const arr = str.split('');
  for (let i = 0; i < Math.floor(len / 2); i++) {
    [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
  }
  return arr.join('');
}

reverseString("hello");
