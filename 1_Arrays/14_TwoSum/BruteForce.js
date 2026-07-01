function twoSum(arr = [], target) {
  let n = arr.length;

  if (n <= 1) return [-1, -1];

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = arr[i] + arr[j];

      if (sum === target) return [i, j];
    }
  }

  return [-1, -1];
}

let arr = [3, 8, 2, 1, 9, 10];
let target = 19;

console.log(twoSum(arr, target));
