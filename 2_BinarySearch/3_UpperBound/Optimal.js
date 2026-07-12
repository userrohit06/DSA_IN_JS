function upperBound(arr = [], target) {
  let n = arr.length;
  let ans = n;
  let low = 0,
    high = n - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}
