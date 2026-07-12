function lowerBound(arr = [], target) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

function upperBound(arr = [], target) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

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

function firstAndLastOccurrence(arr = [], target) {
  let first = lowerBound(arr, target);

  if (first === arr.length || arr[first] !== target) {
    return [-1, -1];
  }

  let last = upperBound(arr, target) - 1;

  return [first, last];
}
