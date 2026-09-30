function lowestCommonAncestor(node, p, q) {
  if (node === null) return null;

  // found one of the node, return upward
  if (node === p || node === q) return node;

  const left = lowestCommonAncestor(node.left, p, q);
  const right = lowestCommonAncestor(node.right, p, q);

  if (left !== null && right !== null) return node;

  return left || right;
}
