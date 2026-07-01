function majorityElement(arr = []) {
  let n = arr.length;
  let candidate = -1; // assuming array has only positive elements
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (count === 0) candidate = arr[i];

    if (candidate === arr[i]) count++;
    else count--;
  }

  count = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === candidate) count++;
  }

  if (count > n / 2) return candidate;

  return -1;
}
