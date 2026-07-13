function peakElement(arr = []) {
  let n = arr.length;

  if (n === 0) return -1;
  if (n === 1) return arr[0];
  if (arr[0] > arr[1]) return arr[0];
  if (arr[n - 1] > arr[n - 2]) return arr[n - 1];

  let low = 1,
    high = n - 2;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return arr[mid];
    } else if (arr[mid] < arr[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

let arr = [1, 2, 3, 4, 3, 2, 1];
console.log(peakElement(arr));
