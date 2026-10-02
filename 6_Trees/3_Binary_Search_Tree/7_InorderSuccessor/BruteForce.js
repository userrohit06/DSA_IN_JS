function inorderSuccessor(root, x) {
  const elements = [];

  function inorder(node) {
    if (node === null) return;

    inorder(node.left);
    elements.push(node.value);
    inorder(node.right);
  }

  inorder(root);

  for (let i = 0; i < elements.length; i++) {
    if (i === elements.length - 1) return null;

    if (elements[i] === x) {
      return elements[i + 1];
    }
  }

  return null;
}
