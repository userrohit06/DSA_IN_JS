function unionOfTwoArrays(arr1 = [], arr2 = []) {
  let result = new Set();

  for (let i = 0; i < arr1.length; i++) {
    result.add(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    result.add(arr2[j]);
  }

  return [...result].sort((a, b) => a - b);
}

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6];

console.log(unionOfTwoArrays(arr1, arr2));
