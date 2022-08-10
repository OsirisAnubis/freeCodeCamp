const diffArray = (arr1, arr2) => {
  const part1 = arr1.filter(elem => !arr2.includes(elem));
  const part2 = arr2.filter(elem => !arr1.includes(elem));
  return [...part1, ...part2];
};

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
