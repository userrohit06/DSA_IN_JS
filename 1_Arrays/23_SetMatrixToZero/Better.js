function setMatrixToZero(matrix = []) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let row = new Array(rows).fill(false);
  let col = new Array(cols).fill(false);

  // store rows and columns containing zero
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
      }
    }
  }

  // make cells zero
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}
