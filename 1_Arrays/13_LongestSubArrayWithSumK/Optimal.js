function longestSubArrayWithSumK(arr = [], k) {
  let i = 0,
    j = 0;
  let sum = 0;
  let maxLength = 0;
  let n = arr.length;

  while (i < n && j < n) {
    sum += arr[j];

    while (sum > k && i <= j) {
      sum -= arr[i];
      i++;
    }

    if (sum === k) {
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }

  return maxLength;
}

let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
let k = 3;
console.log(longestSubArrayWithSumK(arr, k));
