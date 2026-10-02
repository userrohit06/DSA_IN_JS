function searchInBST(root, target) {
  if (root === null) return false;

  if (root.value === target) return true;

  if (target < root.value) return searchInBST(root.left, target);

  if (target > root.value) return searchInBST(root.right, target);
}
