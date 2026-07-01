function leftRotateArrayBy1Place(arr = []) {
  if (arr.length <= 1) return arr;

  let result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }

  result.push(arr[0]);

  return result;
}

let arr = [1, 2, 3, 4, 5];

console.log(leftRotateArrayBy1Place(arr));
