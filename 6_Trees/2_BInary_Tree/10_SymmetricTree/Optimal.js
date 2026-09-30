function isMirror(left, right) {
  if (left === null && right === null) {
    return true;
  }

  if (left === null || right === null) {
    return false;
  }

  if (left.value !== right.value) {
    return false;
  }

  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

function isSymmetric(root) {
  if (root === null) {
    return true;
  }

  return isMirror(root.left, root.right);
}
