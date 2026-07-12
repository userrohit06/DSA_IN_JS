function findElement(arr = [], target) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

let target = 1;
let arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];

const ans = findElement(arr, target);

ans === -1
  ? console.log("Element not found in array")
  : console.log("Element is found at index", ans);
