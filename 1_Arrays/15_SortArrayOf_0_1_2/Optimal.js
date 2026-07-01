function sortArrayof_0_1_2(arr = []) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    } else {
      mid++;
    }
  }

  return arr;
}

let arr = [2, 1, 0, 1, 1, 0, 2, 2, 0, 1];
console.log(sortArrayof_0_1_2(arr));
