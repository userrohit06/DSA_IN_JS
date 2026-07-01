function maxConsecutiveOnes(arr = []) {
  let n = arr.length;
  let max = 0,
    currCount = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      currCount++;
    } else {
      max = Math.max(max, currCount);
      currCount = 0;
    }
  }

  max = Math.max(max, currCount);
  return max;
}

console.log(maxConsecutiveOnes([1, 1, 1, 1, 9, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1]));
