function spiralMatrix(matrix = []) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;

  let left = 0;
  let right = cols - 1;

  let result = [];

  while (top <= bottom && left <= right) {
    // Left → Right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Top → Bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Right → Left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }

      bottom--;
    }

    // Bottom → Top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }

      left++;
    }
  }

  return result;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralMatrix(matrix));
