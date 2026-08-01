class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  if (head === null) return null;

  let prev = null;
  let curr = head;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

console.log(reverseLinkedList(head));
