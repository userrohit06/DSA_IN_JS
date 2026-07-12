function findElement(arr = [], target) {
  let n = arr.length;
  let low = 0,
    high = n - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] < target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

let arr = [5, 6, 7, 1, 2, 3, 4];
console.log(findElement(arr, 1));
