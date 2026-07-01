function elementThatAppearsOnlyOnce(arr = []) {
  let frequency = {};
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  }

  for (let key in frequency) {
    if (frequency[key] === 1) return Number(key);
  }

  return -1;
}

const arr = [1, 2, 2, 3, 4, 5, 1, 5, 4, 4];
console.log(elementThatAppearsOnlyOnce(arr));
