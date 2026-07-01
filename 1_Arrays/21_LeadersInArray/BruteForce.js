function leadersInArray(arr = []) {
  let result = [];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let isLeader = true;

    for (let j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        isLeader = false;
        break;
      }
    }

    if (isLeader) result.push(arr[i]);
  }

  return result;
}

const arr = [10, 22, 12, 3, 0, 6];
console.log(leadersInArray(arr));
