function maxPathSum(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (node === null) return 0;

    const leftGain = dfs(node.left);
    const rightGain = dfs(node.right);

    const currentPath = leftGain + node.value + rightGain;

    maxSum = Math.max(maxSum, currentPath);

    return node.value + Math.max(leftGain, rightGain);
  }

  dfs(root);

  return maxSum;
}
