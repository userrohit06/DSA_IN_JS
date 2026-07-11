function gasStation(gas = [], cost = []) {
  let n = gas.length;

  // try every station as the starting station
  for (let start = 0; start < n; start++) {
    let tank = 0;
    let isCompleted = true;

    // travel through all n stations
    for (let step = 0; step < n; step++) {
      // current station
      let current = (start + step) % n;

      // fill petrol
      tank += gas[current];

      // travel to next station
      tank -= cost[current];

      // can't reach the next station
      if (tank < 0) {
        isCompleted = false;
        break;
      }
    }

    if (isCompleted) return start;
  }

  return -1;
}

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];

console.log(gasStation(gas, cost)); // 3
