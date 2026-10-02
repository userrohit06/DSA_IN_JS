class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function serialize(root) {
  let result = [];

  function dfs(node) {
    if (node === null) {
      result.push("null");
      return;
    }

    result.push(node.value);

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return result.join(",");
}

function deserialize(data) {
  const tokens = data.split(",");
  let index = 0;

  function buildTree() {
    if (tokens[index] === "null") {
      index++;
      return null;
    }

    const node = new TreeNode(Number(tokens[index]));
    index++;

    node.left = buildTree();
    node.right = buildTree();

    return node;
  }

  buildTree();
}
