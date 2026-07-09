function containerWithMostWater(containers = []) {
  let n = containers.length;

  if (n <= 2) return 0;

  let maxWater = 0;
  let left = 0,
    right = n - 1;

  while (left < right) {
    let minContainer = Math.min(containers[left], containers[right]);
    let containersDiff = right - left;
    let currWater = minContainer * containersDiff;
    maxWater = Math.max(maxWater, currWater);

    if (containers[left] <= containers[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

let containers = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(containerWithMostWater(containers));
