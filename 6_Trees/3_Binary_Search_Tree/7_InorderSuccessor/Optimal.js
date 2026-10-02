function inorderSuccessor(root, x) {
  let curr = Infinity;

  while (root !== null) {
    if (root.value > x) {
      curr = root.value;
      root = root.left;
    } else {
      root = root.right;
    }
  }

  return curr === Infinity ? null : curr;
}
