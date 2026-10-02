function kthSmallestElement(root, k) {
  if (root === null) return null;

  const elements = [];

  function inorder(node) {
    if (node === null) return;

    kthSmallestElement(node.left);
    elements.push(node.value);
    kthSmallestElement(node.right);
  }

  inorder(root);

  return elements[k - 1];
}
