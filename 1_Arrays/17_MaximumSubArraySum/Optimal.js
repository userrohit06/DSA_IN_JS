function maximumSubArraySum(arr = []) {
  let n = arr.length;
  let currentSum = 0;
  let maxSum = -Infinity;

  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 0; i < n; i++) {
    currentSum += arr[i];

    // found a better answer
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }

    // throw away negative sum
    if (currentSum < 0) {
      currentSum = 0;
      tempStart = i + 1;
    }
  }

  return {
    maxSum,
    subArray: arr.slice(start, end + 1),
  };
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maximumSubArraySum(arr));
