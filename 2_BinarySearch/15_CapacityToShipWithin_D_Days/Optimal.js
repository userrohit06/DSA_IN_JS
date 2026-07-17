function calculateDays(weights = [], capacity) {
  let daysUsed = 1;
  let currentLoad = 0;

  for (let weight of weights) {
    if (currentLoad + weight <= capacity) {
      currentLoad += weight;
    } else {
      daysUsed++;
      currentLoad = weight;
    }
  }

  return daysUsed;
}

function shipWithinDays(weights = [], days) {
  let low = Math.max(...weights);
  let high = weights.reduce((sum, weight) => sum + weight, 0);

  let ans = high;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let daysUsed = calculateDays(weights, mid);

    if (daysUsed <= days) {
      ans = mid;
      high = miid - 1;
    } else {
      low = mid + 1;
    }
  }

  return mid;
}
