function mergeIntervals(intervals = []) {
  intervals.sort((a, b) => a[0] - b[0]);

  let n = intervals.length;
  let result = [];

  result.push(intervals[0]);

  for (let i = 1; i < n; i++) {
    let [currStart, currEnd] = intervals[i];
    let lastInterval = result[result.length - 1];

    if (currStart <= lastInterval[1]) {
      // merge
      lastInterval[1] = Math.max(currEnd, lastInterval[1]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
  [7, 11],
];

console.log(mergeIntervals(intervals));
