function deleteNode(root, key) {
  if (root === null) return null;

  if (key < root.value) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.value) {
    root.right = deleteNode(root.right, key);
  } else {
    // found the node

    // case 1: no child
    if (root.left === null && root.right === null) {
      return null;
    }

    // case 2: only right child
    if (root.left === null) {
      return root.right;
    }

    // case 3: only left child
    if (root.right === null) {
      return root.left;
    }

    // case 4: both children present
    let successor = root.right;

    // get smallest value on right
    while (successor.left !== null) {
      successor = successor.left;
    }

    root.value = successor.value;

    root.right = deleteNode(root.right, successor.value);
  }

  return root;
}
