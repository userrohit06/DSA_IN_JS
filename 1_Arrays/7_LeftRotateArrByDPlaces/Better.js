function leftRotateArrByDPlaces(arr = [], noOfRotations) {
  if (arr.length <= 1) return arr;

  let n = arr.length;
  let d = noOfRotations % n;
  let rotatedElements = [];

  // store elements being rotated into rotatedElements array
  for (let i = 0; i < d; i++) {
    rotatedElements.push(arr[i]);
  }

  // store remaining elements into result array
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }

  // [5, 6, 7]

  let j = 0;

  // push rotatedElements back into result array
  while (j < rotatedElements.length) {
    arr[n - d + j] = rotatedElements[j];
    j++;
  }

  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(leftRotateArrByDPlaces(arr, 4));
