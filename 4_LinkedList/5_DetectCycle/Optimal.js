class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectCycle(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) return true;
  }

  return false;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);
head.next.next.next.next.next = head.next.next.next;

console.log(detectCycle(head));
