function countBouquets(bloomDay = [], currentDay, flowersPerBouquet) {
  let consecutiveBloomedFlowers = 0;
  let totalBouquets = 0;

  for (let day of bloomDay) {
    if (day <= currentDay) {
      consecutiveBloomedFlowers++;
    } else {
      totalBouquets += Math.floor(
        consecutiveBloomedFlowers / flowersPerBouquet,
      );
      consecutiveBloomedFlowers = 0;
    }
  }

  totalBouquets += Math.floor(consecutiveBloomedFlowers / flowersPerBouquet);

  return totalBouquets;
}

function minDaysToMakeBouquets(
  bloomDay = [],
  requiredBouquets,
  flowersPerBouquet,
) {
  if (requiredBouquets * flowersPerBouquet > bloomDay.length) {
    return -1;
  }

  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);

  let answer = -1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    let bouquetsMade = countBouquets(bloomDay, mid, flowersPerBouquet);

    if (bouquetsMade >= requiredBouquets) {
      answer = mid;
      high = mid - 1; // Search for an even smaller valid day
    } else {
      low = mid + 1; // Need more days
    }
  }

  return answer;
}

// Test Cases
console.log(minDaysToMakeBouquets([1, 10, 3, 10, 2], 3, 1)); // 3
console.log(minDaysToMakeBouquets([1, 10, 3, 10, 2], 3, 2)); // -1
console.log(minDaysToMakeBouquets([7, 7, 7, 7, 12, 7, 7], 2, 3)); // 12
