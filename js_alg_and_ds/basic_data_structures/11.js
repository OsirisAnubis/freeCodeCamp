function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (const row of arr) {
    if (row.indexOf(elem) === -1) newArr.push(row);
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
