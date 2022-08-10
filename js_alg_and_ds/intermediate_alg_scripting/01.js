const sumAll = arr => {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

sumAll([1, 4]);
