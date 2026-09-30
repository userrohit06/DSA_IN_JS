function hasPathSum(root, targetSum) {
  const paths = [];

  function dfs(node, path) {
    if (node === null) return;

    path.push(node.value);

    if (node.left === null && node.right === null) {
      paths.push([...path]);
    }

    dfs(node.left, path);
    dfs(node.right, path);

    path.pop();
  }

  dfs(root, []);

  for (const path of paths) {
    const sum = path.reduce((total, value) => total + value, 0);

    if (sum === targetSum) return true;
  }

  return false;
}
