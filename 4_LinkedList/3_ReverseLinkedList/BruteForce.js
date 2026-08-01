class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createLinkedList(arr = []) {
  if (arr.length === 0) return null;
  if (arr.length === 1) return new Node(arr[0]);

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    current.next = newNode;
    current = newNode;
  }

  return head;
}

function reverseLinkedList(head) {
  let arr = [];
  let temp = head;

  if (temp === null) return null;

  while (temp !== null) {
    arr.push(temp.data);
    temp = temp.next;
  }

  arr.reverse();

  let newHead = createLinkedList(arr);

  return newHead;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

console.log(reverseLinkedList(head));
