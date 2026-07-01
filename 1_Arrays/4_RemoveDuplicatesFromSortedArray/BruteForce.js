[1, 1, 2, 2, 2, 3, 4, 4, 5];

function removeDuplicatedFromSortedArray(arr = []) {
  return Array.from(new Set(arr));
}

const arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicatedFromSortedArray(arr));
