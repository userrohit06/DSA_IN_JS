function minInRotatedSortedArr(arr = []) {
  let n = arr.length;
  let low = 0,
    high = n - 1;
  let ans = Infinity;

  while (low <= high) {
    // current search space is already sorted
    if (arr[low] <= arr[high]) {
      ans = arr[low];
      return ans;
    }

    let mid = Math.floor(low + (high - low) / 2);

    if (arr[low] <= arr[mid]) {
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      ans = Math.min(arr[mid], ans);
      high = mid - 1;
    }
  }

  return ans;
}

let arr = [7, 4, 5, 6];
console.log(minInRotatedSortedArr(arr));
