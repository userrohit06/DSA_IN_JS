function leftView(root) {
  if (root === null) return null;

  const queue = [root];
  const result = [];
  let front = 0;

  while (queue.length > 0) {
    const levelSize = queue.length - front;

    for (let i = 0; i < levelSize; i++) {
      const node = queue[front++];

      if (i === 0) result.push(node.value);

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return result;
}
