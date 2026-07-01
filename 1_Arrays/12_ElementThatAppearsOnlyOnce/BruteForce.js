function elementThatAppearsOnlyOnce(arr = []) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let currEl = arr[i];
    let frequency = 0;

    for (let j = 0; j < n; j++) {
      if (arr[j] === currEl) frequency++;
    }

    if (frequency === 1) return currEl;
  }

  return -1;
}
