function insertInterval(intervals = [], newInterval = []) {
  // loop to insert new interval in the current intervals array
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[0]) {
      intervals.splice(i, 0, newInterval);
      break;
    }
  }

  // if newInterval belongs at the end
  intervals.push(newInterval);

  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];
    let lastInterval = result[result.length - 1];

    // skip intervals already covered
    if (result.length > 0 && end <= lastInterval[1]) continue;

    for (let j = 1; j < intervals.length; j++) {
      const [currentStart, currentEnd] = intervals[j];

      if (currentStart <= end) {
        end = Math.max(end, currentEnd);
      } else {
        break;
      }
    }

    result.push([start, end]);
  }

  return result;
}

let intervals = [
  [1, 3],
  [6, 9],
];
let newInterval = [2, 5];

console.log(insertInterval(intervals, newInterval));
