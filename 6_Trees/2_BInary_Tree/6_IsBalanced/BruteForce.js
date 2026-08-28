function getHeight(node) {
  if (node === null) return 0;

  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

function isBalanced(node) {
  if (node === null) return true;

  const leftHeight = getHeight(node);
  const rightHeight = getHeight(node);

  const difference = Math.abs(rightHeight - leftHeight);

  if (difference > 1) false;

  return isBalanced(node.left) && isBalanced(node.right);
}
