function mergeIntervals(intervals = []) {
  intervals.sort((a, b) => a[0] - b[0]);
  let n = intervals.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    // skip intervals already covered
    if (result.length > 0 && end <= result[result.length - 1][1]) continue;

    for (let j = 1; j < n; j++) {
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
  [2, 6],
  [8, 10],
  [15, 18],
  [7, 11],
];

console.log(mergeIntervals(intervals));

/**
 * Sorting: O(n log n)
 * Nest loop: O(n2)
 * Overall: O(n2)
 */
