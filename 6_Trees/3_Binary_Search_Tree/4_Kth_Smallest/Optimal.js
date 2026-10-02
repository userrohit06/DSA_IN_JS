function kthSmallestElementOptimized(root, k) {
  let count = 0;
  let result = null;

  function inorder(node) {
    // If we already found the result or hit an empty node, stop searching
    if (node === null || result !== null) return;

    inorder(node.left);

    // Increment count when visiting the current node
    count++;
    if (count === k) {
      result = node.value;
      return; // Found it!
    }

    inorder(node.right);
  }

  inorder(root);
  return result;
}
