function findFloor(arr = [], target) {
  let low = 0,
    high = arr.length - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] <= target) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
}

function findCeil(arr = [], target) {
  let low = 0,
    high = arr.length - 1;
  let ans = -1;

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

let arr = [1, 2, 3, 4, 5, 7, 8];
let target = 6;

console.log(findFloor(arr, target));
console.log(findCeil(arr, target));
