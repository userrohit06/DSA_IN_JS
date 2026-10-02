function topView(root) {
  if (root === null) return [];

  const queue = [{ node: root, hd: 0 }];
  const result = new Map();

  let front = 0;

  while (front < queue.length) {
    const { node, hd } = queue[front++];

    // first node encountered at this horizontal distance
    if (!result.has(hd)) {
      result.set(hd, node.value);
    }

    // left -> hd - 1
    if (node.left !== null) {
      queue.push({
        node: node.left,
        hd: hd - 1,
      });
    }

    // right -> hd + 1
    if (node.right !== null) {
      queue.push({
        node: node.right,
        hd: hd + 1,
      });
    }
  }

  // sort HDs from left to right
  const sortedHD = [...result.keys()].sort((a, b) => a - b);
  return sortedHD.map((hd) => result.get(hd));
}
