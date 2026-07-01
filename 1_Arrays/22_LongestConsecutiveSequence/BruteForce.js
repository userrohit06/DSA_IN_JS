function linearSearch(arr = [], target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }

  return false;
}

function longestConsecutiveSequence(arr = []) {
  let maxLen = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let curr = arr[i];
    let currLen = 1;

    while (linearSearch(arr, curr + 1)) {
      curr++;
      currLen++;
    }

    maxLen = Math.max(maxLen, currLen);
  }

  return maxLen;
}

let arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSequence(arr));
