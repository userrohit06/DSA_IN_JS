class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function buildBSTFromSortedArr(arr = []) {
  if (arr.length === 0) return null;

  const mid = Math.floor((0 + arr.length - 1) / 2);

  const root = new TreeNode(arr[mid]);

  root.left = buildBSTFromSortedArr(arr.slice(0, mid));
  root.right = buildBSTFromSortedArr(arr.slice(mid + 1));

  return root;
}
