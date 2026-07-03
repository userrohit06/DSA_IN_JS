function insertInterval(intervals = [], newInterval = []) {
  let inserted = false;

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[0]) {
      intervals.splice(i, 0, newInterval);
      inserted = true;
      break;
    }
  }

  if (!inserted) intervals.push(newInterval);

  let n = intervals.length;
  let result = [];
  result.push(intervals[0]);

  for (let i = 1; i < n; i++) {
    let currentStart = intervals[i][0];
    let currentEnd = intervals[i][1];
    let lastInterval = result[result.length - 1];

    if (currentStart <= lastInterval[1]) {
      lastInterval[1] = Math.max(currentEnd, lastInterval[1]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
}

let intervals = [
  [1, 3],
  [6, 9],
];
let newInterval = [2, 5];

console.log(insertInterval(intervals, newInterval));
