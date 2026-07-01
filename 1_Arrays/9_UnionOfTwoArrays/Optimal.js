function unionOfTwoArrays(arr1 = [], arr2 = []) {
  let ans = [];
  let i = 0,
    j = 0;
  let n = arr1.length,
    m = arr2.length;

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      if (ans.length === 0 || ans[ans.length - 1] !== arr1[i])
        ans.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      if (ans.length === 0 || ans[ans.length - 1] !== arr2[j])
        ans.push(arr2[j]);
      j++;
    } else {
      if (ans.length === 0 || ans[ans.length - 1] !== arr1[i])
        ans.push(arr1[i]);
      i++;
      j++;
    }
  }

  while (i < n) {
    if (ans.length === 0 || ans[ans.length - 1] !== arr1[i]) {
      ans.push(arr1[i]);
    }
    i++;
  }

  while (j < m) {
    if (ans.length === 0 || ans[ans.length - 1] !== arr2[j]) {
      ans.push(arr2[j]);
    }
    j++;
  }

  return ans;
}

const arr1 = [1, 3, 4, 5];
const arr2 = [2, 3, 4, 6];

console.log(unionOfTwoArrays(arr1, arr2));
