function removeDuplicatedFromSortedArrayInPlace(arr = []) {
  let n = arr.length;
  let i = 0,
    j = 1;

  while (j < n) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }

    j++;
  }

  return i + 1;
}
