function aggressiveCows(stalls = [], cows) {
  stalls.sort((a, b) => a - b);

  let minPossibleDistance = 1;
  let maxPossibleDistance = stalls[stalls.length - 1] - stalls[0];

  let answer = -1;

  for (
    let currDistance = minPossibleDistance;
    currDistance <= maxPossibleDistance;
    currDistance++
  ) {
    if (canPlaceCows(stalls, cows, currDistance)) {
      answer = currDistance;
    } else {
      // since distances are increasing, once once fails, all larger ones will also fail
      break;
    }
  }

  return answer;
}

function canPlaceCows(stalls = [], cows, minDistance) {
  let cowsPlaced = 1;
  let lastPlacedPosition = stalls[0];

  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - lastPlacedPosition >= minDistance) {
      cowsPlaced++;
      lastPlacedPosition = stalls[i];
    }
  }

  return cowsPlaced >= cows;
}

console.log(aggressiveCows([1, 2, 4, 8, 9], 3)); // 3
