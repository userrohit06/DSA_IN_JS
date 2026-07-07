function productExceptSelf(arr = []) {
  let n = arr.length;
  let result = new Array(n);

  // store left products in result
  result[0] = 1;

  for (let i = 1; i < n; i++) {
    right[i] = right[i - 1] * arr[i - 1];
  }

  // running right product
  let rightProduct = 1;

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= arr[i];
  }

  return result;
}
