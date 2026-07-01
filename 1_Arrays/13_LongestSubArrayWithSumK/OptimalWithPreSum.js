function longestSubArrayWithSumK(arr = [], k) {
  let map = new Map();
  let runningSum = 0;
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    runningSum += arr[i];

    if (runningSum === k) {
      maxLen = i + 1;
    }

    let need = runningSum - k;

    if (map.has(need)) {
      let length = i - map.get(need);
      maxLen = Math.max(maxLen, length);
    }

    if (!map.has(runningSum)) {
      map.set(runningSum, i);
    }
  }

  return maxLen;
}
