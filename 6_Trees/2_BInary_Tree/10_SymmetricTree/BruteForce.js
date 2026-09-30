class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function cloneTree(node) {
  if (node === null) {
    return null;
  }

  const newNode = new TreeNode(node.value);

  newNode.left = cloneTree(node.left);
  newNode.right = cloneTree(node.right);

  return newNode;
}

function invertTree(node) {
  if (node === null) {
    return null;
  }

  [node.left, node.right] = [node.right, node.left];

  invertTree(node.left);
  invertTree(node.right);

  return node;
}

function isSameTree(node1, node2) {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;

  if (node1.value !== node2.value) return false;

  return (
    isSameTree(node1.left, node2.right) && isSameTree(node1.right, node2.right)
  );
}

function symmetricTree(root) {
  if (root === null) {
    return null;
  }

  const originalTree = cloneTree(root);

  invertTree(root);

  isSameTree(originalTree, root);
}
