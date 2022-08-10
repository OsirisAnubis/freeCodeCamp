function steamrollArray(arr) {
  const result = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) result.push(...steamrollArray(elem))
    else result.push(elem);
  }
  return result;
}

const test = steamrollArray([1, [2], [3, [[4]]]]);
console.log(test);
