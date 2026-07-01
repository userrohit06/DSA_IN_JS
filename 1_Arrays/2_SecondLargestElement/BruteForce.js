function sortedArr(arr = []) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

function secondLargestElement(arr = []) {
  if (arr.length < 2) return "No second largest in array.";

  const sorted_arr = sortedArr(arr);

  if (sorted_arr[0] === sorted_arr[sorted_arr.length - 1])
    return "No second largest in array.";

  let largestIndex = sorted_arr.length - 1;
  let secondLargestIndex = sorted_arr.length - 2;

  while (sorted_arr[secondLargestIndex] === sorted_arr[largestIndex]) {
    secondLargestIndex--;
  }

  return arr[secondLargestIndex];
}
