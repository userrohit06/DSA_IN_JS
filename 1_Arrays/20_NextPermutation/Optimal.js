function nextPermutation(arr = []) {
  let n = arr.length;

  // find the pivot (break point)
  // first index from the right where arr[i] < arr[i + 1]
  let pivot = -1;

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      pivot = i;
      break;
    }
  }

  // if no pivot found, array is already the lagest permutation
  if (pivot === -1) {
    arr.reverse();
    return arr;
  }

  // find first element from right greater than pivot
  for (let j = n - 1; j > pivot; j--) {
    if (arr[j] > arr[pivot]) {
      // swap
      [arr[j], arr[pivot]] = [arr[pivot], arr[j]];
    }
  }

  // reverse everything after pivot
  let left = pivot + 1;
  let right = n - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}
