function secondLargestElement(arr = []) {
  if (arr.length < 2) return "No second largest";

  let largestEl = -Infinity;
  let secondLargestEl = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestEl) {
      secondLargestEl = largestEl;
      largestEl = arr[i];
    } else if (arr[i] < largestEl && arr[i] > secondLargestEl) {
      secondLargestEl = arr[i];
    }
  }

  return secondLargestEl === -Infinity ? "No second largest" : secondLargestEl;
}

arr = [2, 4, 9, 10, 7, 5, 8, 10];

console.log(secondLargestElement(arr));
