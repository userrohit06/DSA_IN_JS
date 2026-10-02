class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function constructBinaryTree(preOrder = [], inorder = []) {
  if (preOrder.length === 0 || inorder.length === 0) return null;

  // first element of preoroder = root
  const rootValue = preOrder[0];
  const root = new Node(rootValue);

  // find root in inorder
  const rootIndex = inorder.findIndex(rootValue);

  // split inorder
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  // number of nodes in left subtree
  const leftSize = leftInorder.length;

  // split preorder
  const leftPreorder = preOrder.slice(1, leftSize + 1);
  const rightPreorder = preOrder.slice(leftSize + 1);

  // recursively build left and right
  root.left = constructBinaryTree(leftPreorder, leftInorder);
  root.right = constructBinaryTree(rightPreorder, rightInorder);

  return root;
}
