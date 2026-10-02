function rightView(root) {
  if (root === null) return [];

  let queue = [root];
  let front = 0;

  let result = [];

  while (front < queue.length) {
    const levelSize = queue.length - front;

    for (let i = 0; i < levelSize; i++) {
      const node = queue[front++];

      if (i === levelSize - 1) result.push(node.value);

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return result;
}
