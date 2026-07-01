function sortArrayof_0_1_2(arr = []) {
  let totalZeros = 0,
    totalOnes = 0,
    totalTwos = 0;

  // run primary loop to count 0, 1 and 2 occurances
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) totalZeros++;
    if (arr[i] === 1) totalOnes++;
    if (arr[i] === 2) totalTwos++;
  }

  // run first loop to set zeros
  for (let j = 0; j < totalZeros; j++) {
    arr[j] = 0;
  }

  // run second loop to set ones
  for (let k = totalZeros; k < totalZeros + totalOnes; k++) {
    arr[k] = 1;
  }

  // run third loop to set twos
  for (
    let m = totalZeros + totalOnes;
    m < totalZeros + totalOnes + totalTwos;
    m++
  ) {
    arr[m] = 2;
  }

  return arr;
}

let arr = [2, 1, 0, 1, 1, 0, 2, 2, 0, 1];
console.log(sortArrayof_0_1_2(arr));
