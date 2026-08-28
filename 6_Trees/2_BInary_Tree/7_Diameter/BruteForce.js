function getHeight(node) {
  if (node === null) return 0;

  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

function diameter(node) {
  if (node === null) return 0;

  // 1. find diameter passing through current node
  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  const currentDiameter = leftHeight + rightHeight;

  // 2. find diameter inside left subtree
  const leftDiameter = diameter(node.left);

  // 3. find diameter inside right subtree
  const rightDiamter = diameter(node.right);

  // 4. return the largest one
  return Math.max(currentDiameter, leftDiameter, rightDiamter);
}
