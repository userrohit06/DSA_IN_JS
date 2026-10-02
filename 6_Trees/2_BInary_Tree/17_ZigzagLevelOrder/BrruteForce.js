function zigzagLevelOrder(root) {
  if (root === null) return [];

  const queue = [root];
  let front = 0;
  const result = [];
  let levelNumber = 0;

  while (front < queue.length) {
    const levelSize = queue.length - front;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue[front++];
      level.push(node.value);

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    if (levelNumber % 2 === 1) level.reverse();
    result.push(level);

    levelNumber++;
  }

  return result;
}
