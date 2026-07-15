function smallestDivisor(nums = [], threshold) {
  const maxNum = Math.max(...nums);

  for (let divisor = 1; divisor <= maxNum; divisor++) {
    let currentSum = 0;

    for (let num of nums) {
      currentSum += Math.ceil(num / divisor);
    }

    if (currentSum <= threshold) return divisor;
  }

  return -1;
}

let nums = [1, 2, 5, 9];
let threshold = 6;

console.log(smallestDivisor(nums, threshold));
