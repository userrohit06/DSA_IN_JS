function invertTree(node) {
  if (node === null) {
    return null;
  }

  // swap left and right nodes
  [node.left, node.right] = [node.right, node.left];

  // invert left subtree
  invertTree(node.left);

  // invert right subtree
  invertTree(node.right);

  return node;
}
