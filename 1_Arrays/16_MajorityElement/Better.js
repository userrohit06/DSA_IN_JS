function majorityElement(arr = []) {
  let n = arr.length;
  let freqMap = new Map();

  for (let i = 0; i < n; i++) {
    freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
  }

  for (let [element, freq] of freqMap) {
    if (freq > n / 2) return element;
  }

  return -1; // assuming array has positive numbers
}

let arr = [1, 1, 1, 1];
console.log(majorityElement(arr));
