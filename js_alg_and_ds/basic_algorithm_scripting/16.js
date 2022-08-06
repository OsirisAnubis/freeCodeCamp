function chunkArrayInGroups(arr, size) {
  const result = [];
  let row = [];
  for(let i = 1; i <= arr.length; i++) {
    row.push(arr[i - 1]);
    if ((i % size === 0) || i === arr.length) {
      result.push(row);
      row = [];
    }
  }
  return result;
}

const test = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
console.log(test);
