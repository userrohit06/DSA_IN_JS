function setMatrixZeroes(matrix = []) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let col0 = 1;

  // Store markers
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) col0 = 0;

    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Update matrix using markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Handle first row
  if (matrix[0][0] === 0) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  // Handle first column
  if (col0 === 0) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}
