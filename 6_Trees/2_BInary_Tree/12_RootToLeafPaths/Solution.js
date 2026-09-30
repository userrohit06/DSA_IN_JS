function rootToLeafPaths(root) {
  const result = [];

  function dfs(node, path) {
    if (node === null) return null;

    path.push(node.value);

    if (node.left === null && node.right === null) {
      result.push([...path]);
    }

    dfs(node.left, path);
    dfs(node.right, path);

    path.pop();
  }

  dfs(root, []);

  return result;
}
