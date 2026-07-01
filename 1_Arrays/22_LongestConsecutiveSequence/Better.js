function longestConsecutiveSequence(arr = []) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let maxLength = 1;
  let currLen = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1]) continue;

    if (arr[i] === arr[i - 1] + 1) currLen++;
    else currLen = 1;

    maxLength = Math.max(maxLength, currLen);
  }

  return maxLength;
}

let arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSequence(arr));
