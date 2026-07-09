function findMax(start, end) {
  let maxValue = -Infinity;

  for (let i = start; i <= end; i++) {
    if (arr[i] > maxValue) maxValue = arr[i];
  }

  return maxValue;
}

function trappingRainWater(arr = []) {
  let n = arr.length;

  if (n <= 2) return 0;

  let totalTrappedWater = 0;

  for (let i = 1; i <= n - 2; i++) {
    let current = arr[i];

    let leftMax = findMax(0, i - 1);
    let rightMax = findMax(i + 1, n - 1);

    let currentTrappedWater = Math.max(
      0,
      Math.min(leftMax, rightMax) - current,
    );
    totalTrappedWater += currentTrappedWater;
  }

  return totalTrappedWater;
}

let arr = [3, 0, 2, 0, 4];
trappingRainWater(arr);
