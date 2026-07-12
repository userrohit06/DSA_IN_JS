function firstAndLastOccurance(arr = [], target) {
  let first = -1,
    last = -1;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      if (first === -1) first = i;
      last = i;
    }
  }

  return [first, last];
}

let arr = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];
let target = 31;

console.log(firstAndLastOccurance(arr, target));
