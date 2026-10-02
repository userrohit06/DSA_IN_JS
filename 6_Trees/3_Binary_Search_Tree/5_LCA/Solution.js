function lowestCommonAncestor(root, p, q) {
  if (root === null) return null;

  if (root.value < p && root.value < q) {
    return lowestCommonAncestor(root.right, p, q);
  }

  if (root.value > p && root.value > q) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
}
