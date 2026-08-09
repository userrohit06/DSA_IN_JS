class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectCycle(head) {
  const visited = new Set();
  let current = head;

  while (current !== null) {
    if (visited.has(current)) return current;
    visited.add(current);
    current = current.next;
  }

  return null;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);
head.next.next.next.next.next = head.next.next.next;

console.log(detectCycle(head));
