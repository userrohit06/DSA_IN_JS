function rotateMatrix90Degree(matrix = []) {
  let n = matrix.length;
  let result = Array.from({ length: n }, () => new Array(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }

  return result;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateMatrix90Degree(matrix));
