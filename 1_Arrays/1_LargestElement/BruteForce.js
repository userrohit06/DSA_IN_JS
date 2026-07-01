function sortedArr(arr = []) {
  if (arr.length === 0 || arr.length === 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

function largestElementInArr(arr = []) {
  const sort_arr = sortedArr(arr);
  return sort_arr[sort_arr.length - 1];
}

const arr = [4, 2, 1, 5, 6, 3, 2];

console.log(`Largest element in arr is: ${largestElementInArr(arr)}`);
