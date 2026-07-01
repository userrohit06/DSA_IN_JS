// Problem: if a cell in the matrix is 0, mark all cells in its row and column to zero
// Assumption: matrix contains only positive numbers

function setMatrixToZero(matrix = []) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  // traverse every cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // original 0 found
      if (matrix[i][j] === 0) {
        // mark enire row
        for (let k = 0; k < cols; k++) {
          if (matrix[i][k] !== 0) {
            matrix[i][k] = -1;
          }
        }

        // mark entire column
        for (let k = 0; k < rows; k++) {
          if (matrix[k][j] !== 0) {
            matrix[k][j] = -1;
          }
        }
      }
    }
  }

  // convert all -1 to 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log(setMatrixToZero(matrix));

// TC: O((m x n) x (m + n))
// SC: O(1)
