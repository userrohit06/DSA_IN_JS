// left -> right -> node

function postorderTraversal(node, output = []) {
  if (node === null) return output;

  // 1. go left
  postorderTraversal(node.left, output);

  // 2. go right
  postorderTraversal(node.right, output);

  // 3. Process current node
  output.push(node.value);

  return output;
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const rootNode = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
const node3 = new TreeNode(4);
const node4 = new TreeNode(5);

rootNode.left = node1;
rootNode.right = node2;
node1.left = node3;
node1.right = node4;

console.log(postorderTraversal(rootNode));
