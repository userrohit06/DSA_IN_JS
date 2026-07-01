function missingElement(arr = []) {
  let n = arr.length;
  let xor1 = 0;
  let xor2 = 0;

  for (let i = 0; i < n; i++) {
    xor1 ^= i + 1;
    xor2 ^= arr[i];
  }

  return xor1 ^ xor2;
}
