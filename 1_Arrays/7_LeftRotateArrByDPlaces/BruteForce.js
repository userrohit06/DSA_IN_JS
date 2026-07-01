function leftRotateArrByDPlaces(arr = [], noOfRotations) {
  if (arr.length <= 1) return arr;

  let n = arr.length;
  let d = noOfRotations % n;
  let rotatedElements = [],
    resultArr = [];

  // store elements being rotated into rotatedElements array
  for (let i = 0; i < d; i++) {
    rotatedElements.push(arr[i]);
  }

  // store remaining elements into result array
  for (let i = d; i < n; i++) {
    resultArr[i - d] = arr[i];
  }

  // after both loops [1, 2, 3, 4, 5, 6, 7] and d = 3
  // rotatedElements = [1, 2, 3]
  // resultArr = [4, 5, 6, 7]

  let j = 0;

  // push rotatedElements back into result array
  while (j < rotatedElements.length) {
    resultArr.push(rotatedElements[j]);
    j++;
  }

  return resultArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(leftRotateArrByDPlaces(arr, 4));
