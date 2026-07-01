function majorityElement(arr = []) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let curr = arr[i];
    let freq = 0;

    for (let j = 0; j < n; j++) {
      if (arr[j] === curr) freq++;
    }

    if (freq > n / 2) return curr;
  }

  return -1; // assuming array has positive numbers
}

let arr = [2, 4, 4, 4];
console.log(majorityElement(arr));
