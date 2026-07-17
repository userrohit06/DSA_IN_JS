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
  // minimum possible capacity
  let minCapacity = Math.max(...weights);

  // maximum possible capacity
  let maxCapacity = weights.reduce((sum, weight) => sum + weight, 0);

  // try every possible capacity
  for (
    let currentCapacity = minCapacity;
    currentCapacity <= maxCapacity;
    currentCapacity++
  ) {
    let daysUsed = calculateDays(weights, currentCapacity);

    if (daysUsed <= days) {
      return currentCapacity;
    }
  }

  return -1;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 15
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3)); // 6
