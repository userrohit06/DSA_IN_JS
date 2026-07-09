function trappingRainWater(arr = []) {
  let n = arr.length;

  if (n <= 2) return 0;

  let leftMax = new Array(n);
  let rightMax = new Array(n);

  // build left max array
  leftMax[0] = arr[0];

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
  }

  rightMax[n - 1] = arr[n - 1];

  // build right max array
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
  }

  let totalTrappedWater = 0;

  for (let i = 1; i < n - 1; i++) {
    totalTrappedWater += Math.min(leftMax[i], rightMax[i]) - arr[i];
  }

  return totalTrappedWater;
}

let arr = [3, 0, 2, 0, 4]; // 7
trappingRainWater(arr);
