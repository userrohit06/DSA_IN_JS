class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function middleOfLinkedList(head) {
  let current = head;
  let length = 0;

  while (current !== null) {
    length++;
    current = current.next;
  }

  let index = Math.floor(length / 2);

  current = head;
  length = 0;

  while (current !== null && length < index) {
    current = current.next;
    length++;
  }

  return current;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);

console.log(middleOfLinkedList(head));
