function minInRotatedSortedArr(arr = []) {
  let ans = Infinity;

  for (let i = 0; i < arr.length; i++) {
    ans = Math.min(ans, arr[i]);
  }

  return ans;
}

let arr = [3, 4, 5, 1, 2];
console.log(minInRotatedSortedArr(arr));
