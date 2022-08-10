function uniteUnique(...arrs) {
  const result = [];
  for (const arr of arrs)
    for (const elem of arr) 
      if (!(result.includes(elem))) result.push(elem);
  return result;
}

uniteUnique([1, 3, 2], [5, 4], [5, 6]);
