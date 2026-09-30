function preOrderWithNull(node, output = []) {
  if (node === null) {
    output.push(null);
    return;
  }

  output.push(node.value);

  preOrderWithNull(node.left, output);
  preOrderWithNull(node.right, output);

  return output;
}

function sameBinaryTree(root1, root2) {
  const tree1 = preOrderWithNull(root1);
  const tree2 = preOrderWithNull(root2);

  if (tree1.length !== tree2.length) return false;

  for (let index = 0; index < tree1.length; index++) {
    if (tree1[index] !== tree2[index]) {
      return false;
    }
  }

  return true;
}
