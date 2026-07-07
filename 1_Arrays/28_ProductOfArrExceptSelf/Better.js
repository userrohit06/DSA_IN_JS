function productOfArrExceptSelf(arr = []) {
  let n = arr.length;

  let left = new Array(n);
  let right = new Array(n);
  let result = new Array(n);

  // left products
  left[0] = 1;

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * arr[i - 1];
  }

  // right products
  right[n - 1] = 1;

  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * arr[i + 1];
  }

  // final answer
  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}

let arr = [1, 2, 3, 4];
console.log(productOfArrExceptSelf(arr));
