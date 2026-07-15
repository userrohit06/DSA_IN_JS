function calculateHours(piles = [], speed) {
  let totalHours = 0;

  for (let pile of piles) {
    totalHours += Math.ceil(pile / speed);
  }

  return totalHours;
}

function minEatingSpeed(piles = [], h) {
  let low = 1;
  let high = Math.max(...piles);
  let ans = high;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    let requiredHours = calculateHours(piles, mid);

    if (requiredHours <= h) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

// Test Cases
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
