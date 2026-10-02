function topView(root) {
  if (root === null) return [];

  const queue = [{ node: root, hd: 0 }];
  const result = new Map();

  let front = 0;

  // track the boundaries of hd
  let minHd = 0;
  let maxHd = 0;

  while (front < queue.length) {
    const { node, hd } = queue[front++];

    // first node encountered at this horizontal distance
    if (!result.has(hd)) {
      result.set(hd, node.value);

      if (hd < minHd) minHd = hd;
      if (hd > maxHd) maxHd = hd;
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

  // optimization: extract keys in O(n) linear time without sorting
  const finalResult = [];

  for (let i = minHd; i < maxHd; i++) {
    if (result.has(i)) {
      finalResult.push(result.get(i));
    }
  }

  return finalResult;
}
