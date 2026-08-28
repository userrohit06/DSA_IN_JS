function diameter(node) {
  let maxDiameter = 0;

  function getHeight(node) {
    if (node === null) return 0;

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    // diameter passing through current node
    const currentDiameter = leftHeight + rightHeight;

    // keep the maximum found so far
    maxDiameter = Math.max(maxDiameter, currentDiameter);

    // return height to parent
    return 1 + Math.max(leftHeight, rightHeight);
  }

  getHeight(root);

  return maxDiameter;
}
