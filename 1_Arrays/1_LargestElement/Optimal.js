function findLargestElementInArr(arr = []) {
  if (arr.length === 0) return "No element in array";
  if (arr.length === 1) return arr[0];

  let largestEl = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestEl) {
      largestEl = arr[i];
    }
  }

  return largestEl;
}
