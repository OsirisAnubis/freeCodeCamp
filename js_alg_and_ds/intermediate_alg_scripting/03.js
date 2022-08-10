const destroyer = (arr, ...arrDel) => arr.filter(val => !arrDel.includes(val));

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
