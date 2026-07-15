function countBouqets(bloomDay = [], currentDay, flowersPerBouqet) {
  let consecutiveBloomedFlowers = 0;
  let totalBouqets = 0;

  for (let day of bloomDay) {
    if (day <= currentDay) {
      // flower has bloomed
      consecutiveBloomedFlowers++;
    } else {
      // continuous segment ended
      totalBouqets += Math.floor(consecutiveBloomedFlowers / flowersPerBouqet);
      consecutiveBloomedFlowers = 0;
    }
  }

  // last continuous segment
  totalBouqets += Math.floor(consecutiveBloomedFlowers / flowersPerBouqet);

  return totalBouqets;
}

function minDaysToMakeBouquets(
  bloomDay = [],
  requiredBouqets,
  flowersPerBouqet,
) {
  // impossible case
  if (requiredBouqets * flowersPerBouqet > bloomDay.length) return -1;

  const minBloomDay = Math.min(...bloomDay);
  const maxBloomDay = Math.max(...bloomDay);

  // try every possible day
  for (let currentDay = minBloomDay; currentDay <= maxBloomDay; currentDay++) {
    const bouqetsMade = countBouqets(bloomDay, currentDay, flowersPerBouqet);

    if (bouqetsMade >= requiredBouqets) {
      return currentDay;
    }
  }

  return -1;
}

// Test Cases
console.log(minDaysToMakeBouquets([1, 10, 3, 10, 2], 3, 1)); // 3
console.log(minDaysToMakeBouquets([1, 10, 3, 10, 2], 3, 2)); // -1
console.log(minDaysToMakeBouquets([7, 7, 7, 7, 12, 7, 7], 2, 3)); // 12
