function hasPathSum(node, currentSum, targetSum) {
  if (node === null) return false;

  currentSum += node.value;

  // we reached a leaf node
  if (node.left === null && node.right === null) {
    return currentSum === targetSum;
  }

  // try both parts

  return (
    hasPathSum(node.left, currentSum, targetSum) ||
    hasPathSum(node.right, currentSum, targetSum)
  );
}

function isEqualToTarget(root, targetSum) {
  hasPathSum(root, 0, targetSum);
}
