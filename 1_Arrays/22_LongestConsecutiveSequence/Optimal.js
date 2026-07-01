function longestConsecutiveSequence(arr = []) {
  if (arr.length === 0) return 0;

  let maxLength = 0;
  let set = new Set(arr);

  for (let num of set) {
    // only start counting if this is the beginning of the sequence
    if (!set.has(num - 1)) {
      let current = num;
      let currLen = 1;

      // keep checking next consecutive number
      while (set.has(current + 1)) {
        current++;
        currLen++;
      }

      maxLength = Math.max(maxLength, currLen);
    }
  }

  return maxLength;
}

let arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSequence(arr));
