// Approach 1:

function rearrangeArrBySign(arr = []) {
  let n = arr.length;
  let posArr = [],
    negArr = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) negArr.push(arr[i]);
    else posArr.push(arr[i]);
  }

  let index = 0;

  // insert positive elements into array
  for (let j = 0; j < n; j = j + 2) {
    arr[j] = posArr[index];
    index++;
  }

  index = 0;

  // insert negative elements into array
  for (let j = 1; j < n; j = j + 2) {
    arr[j] = negArr[index];
    index++;
  }

  return arr;
}

let arr = [3, 1, -2, -5, 2, -4];
console.log(rearrangeArrBySign(arr));

// Approach 2:

function rearrangeArrBySign(arr = []) {
  let n = arr.length;
  let ans = new Array(n);

  let posIndex = 0;
  let negIndex = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      ans[posIndex] = arr[i];
      posIndex += 2;
    } else {
      ans[negIndex] = arr[i];
      negIndex += 2;
    }
  }

  return ans;
}
