function findFloor(arr = [], target) {
  let n = arr.length;

  for (let i = n; i >= 0; i--) {
    if (arr[i] <= target) return i;
  }

  return -1;
}

function findCeil(arr = [], target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= target) return i;
  }

  return -1;
}

let arr = [1, 2, 3, 4, 5, 7, 8];
let target = 6;

console.log(findFloor(arr, target));
console.log(findCeil(arr, target));
