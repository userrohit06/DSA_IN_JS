function lowerBound(arr = [], target) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] >= target) return i;
  }

  return n;
}

let arr = [1, 2, 3, 4, 5, 8, 9, 10];
let target = 60;

console.log(lowerBound(arr, target));
