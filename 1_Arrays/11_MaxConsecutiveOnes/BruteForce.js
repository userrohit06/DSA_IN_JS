function maxConsecutiveOnes(arr = []) {
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let currCount = 0;

    if (arr[i] === 1) {
      let j = i;

      while (j < arr.length && arr[j] === 1) {
        currCount++;
        j++;
      }

      maxCount = Math.max(maxCount, currCount);
    }
  }

  return maxCount;
}

let arr = [1, 1, 4, 1, 1, 1];
console.log(maxConsecutiveOnes(arr));
