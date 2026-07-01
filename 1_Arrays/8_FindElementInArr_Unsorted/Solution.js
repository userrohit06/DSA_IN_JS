function findElement(arr = [], el) {
  let n = arr.length;

  if (n === 0) return -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] === el) return i;
  }

  return -1;
}

const arr = [2, 4, 1, 6, 8, 9];
const target = 9;

console.log(findElement(arr, target));
