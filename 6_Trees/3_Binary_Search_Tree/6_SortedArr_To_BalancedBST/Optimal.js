class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function buildBSTFromSortedArr(arr = [], start, end) {
  if (start > end) return null;

  const mid = Math.floor((0 + arr.length - 1) / 2);

  const root = new TreeNode(arr[mid]);

  root.left = buildBSTFromSortedArr(arr, start, mid - 1);
  root.right = buildBSTFromSortedArr(arr, mid + 1, end);

  return root;
}
