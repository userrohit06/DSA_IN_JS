function productOfArrExceptSelf(arr = []) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let ans = 1;

    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      else ans *= arr[j];
    }

    result.push(ans);
  }

  return result;
}

let arr = [1, 2, 3, 4];
console.log(productOfArrExceptSelf(arr));
