function insertInterval(intervals = [], newInterval = []) {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    // case 1: current interval is completely before newInterval
    if (intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
    }

    // case 2: current interval is completely after newInterval
    else if (intervals[i][0] > newInterval[1]) {
      result.push(newInterval);
      newInterval = intervals[i];
    }

    // case 3: overlapping intervals, so merge them
    else {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    }
  }

  // add the last merged interval
  result.push(newInterval);

  return result;
}
