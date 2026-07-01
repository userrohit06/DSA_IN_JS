function moveZerosToEnd(arr = []) {
  if (arr.length === 0) return [];

  let i = 0,
    j = 0;
  let n = arr.length;

  while (j < n) {
    if (i !== j && arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }

    j++;
  }

  return arr;
}

let arr = [0, 1, 0, 3, 9, 0];

console.log(moveZerosToEnd(arr));
