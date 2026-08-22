function levelorderTraversal(root) {
  const result = [];
  const queue = [];

  queue.push(root);

  let front = 0;

  while (queue.length > 0) {
    const node = queue[front++];

    result.push(node.value);

    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return result;
}
