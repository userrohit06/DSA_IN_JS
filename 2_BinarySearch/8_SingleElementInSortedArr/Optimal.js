function singleNonDuplicate(arr = []) {
  let n = arr.length;

  // edge cases
  if (n === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 0,
    high = n - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    // found single element
    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
      return arr[mid];
    }

    // pairing pattern is correct -> move right
    if (
      (mid % 2 === 0 && arr[mid] === arr[mid + 1]) ||
      (mid % 2 === 1 && arr[mid] === arr[mid - 1])
    ) {
      low = mid + 1;
    }
    // pairing pattern is broken -> move left
    else {
      high = mid - 1;
    }
  }

  return -1;
}

let arr = [1, 1, 2, 2, 3, 4, 4, 5, 5];
console.log(singleNonDuplicate(arr)); // 3
