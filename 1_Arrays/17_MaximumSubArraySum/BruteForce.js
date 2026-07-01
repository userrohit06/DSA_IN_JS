function maximumSubArraySum(arr = []) {
  let n = arr.length;
  let maxSum = -Infinity;
  let start = -1,
    end = -1;

  for (let i = 0; i < n; i++) {
    let currentSum = 0;

    for (let j = i; j < n; j++) {
      currentSum += arr[j];

      if (currentSum > maxSum) {
        maxSum = currentSum;
        start = i;
        end = j;
      }
    }
  }

  return {
    maxSum,
    subArray: arr.slice(start, end + 1),
  };
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maximumSubArraySum(arr));
