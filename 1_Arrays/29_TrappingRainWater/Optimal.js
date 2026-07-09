function trappingRainWater(arr = []) {
  let n = arr.length;

  if (n <= 2) return 0;

  let left = 0;
  let right = n - 1;

  let leftMax = arr[left];
  let rightMax = arr[right];

  let totalWater = 0;

  while (left < right) {
    if (leftMax <= rightMax) {
      left++;

      leftMax = Math.max(leftMax, arr[left]);

      totalWater += leftMax - arr[left];
    } else {
      right--;

      rightMax = Math.max(rightMax, arr[right]);

      totalWater += rightMax - arr[right];
    }
  }

  return totalWater;
}

let arr = [4, 2, 0, 3, 2, 5];
console.log(trappingRainWater(arr)); // 9
