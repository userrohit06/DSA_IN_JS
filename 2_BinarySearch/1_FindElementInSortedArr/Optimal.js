function findElement(arr = [], target) {
  let n = arr.length;
  let low = 0,
    high = n - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

let target = 7;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ans = findElement(arr, target);

ans === -1
  ? console.log("Element not found in array")
  : console.log("Element is found at index", ans);
