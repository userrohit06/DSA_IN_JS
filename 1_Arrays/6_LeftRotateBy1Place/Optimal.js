function leftRotateArrayBy1Place(arr = []) {
  if (arr.length <= 1) return arr;

  let temp = arr[0];
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }

  arr[n - 1] = temp;

  return arr;
}

console.log(leftRotateArrayBy1Place([1, 2, 3, 4, 5]));
