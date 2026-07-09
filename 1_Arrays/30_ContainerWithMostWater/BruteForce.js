function containerWithMostWater(containers = []) {
  let n = containers.length;

  if (n <= 2) return 0;

  let mostWater = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let lowerContainer = Math.min(containers[i], containers[j]);
      let containerDiff = j - i;
      let totalWater = lowerContainer * containerDiff;
      mostWater = Math.max(mostWater, totalWater);
    }
  }

  return mostWater;
}

let containers = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(containerWithMostWater(containers));
