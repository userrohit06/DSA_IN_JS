function longestSubArrayWithSumK(arr = [], k) {
  let longest = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === k) longest = Math.max(longest, j - i + 1);
    }
  }

  return longest;
}

let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
let k = 3;
console.log(longestSubArrayWithSumK(arr, k));
