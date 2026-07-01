function elementThatAppearsOnlyOnce(arr = []) {
  let xor = 0;

  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
  }

  return xor;
}

const arr = [1, 2, 2, 3, 4, 5, 1, 5, 4];
console.log(elementThatAppearsOnlyOnce(arr));
