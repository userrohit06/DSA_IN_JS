function leadersInArray(arr = []) {
  let n = arr.length;
  let maxRight = -Infinity;
  let result = [];

  for (let i = n - 1; i >= 0; i--) {
    let current = arr[i];

    if (current > maxRight) {
      result.push(current);
      maxRight = current;
    }
  }

  return result.reverse();
}

const arr = [10, 22, 12, 3, 0, 6];
console.log(leadersInArray(arr));
