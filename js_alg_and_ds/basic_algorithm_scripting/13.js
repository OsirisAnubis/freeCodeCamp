function bouncer(arr) {
  const result = [];
  for (const elem of arr) {
    if (!!elem) result.push(elem)
  }
  return result;
}

bouncer([7, "ate", "", false, 9]);
