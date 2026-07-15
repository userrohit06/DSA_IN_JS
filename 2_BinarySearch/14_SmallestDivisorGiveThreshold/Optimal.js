function smallestDivisor(nums = [], threshold) {
  let low = 1,
    high = Math.max(...nums);
  let ans = 0;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    let currentSum = 0;

    for (let num of nums) {
      currentSum += Math.ceil(num / mid);
    }

    if (currentSum <= threshold) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

let nums = [1, 2, 5, 9];
let threshold = 6;

console.log(smallestDivisor(nums, threshold));
