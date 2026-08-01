class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createLinkedList(arr = []) {
  if (arr.length === 0) return null;

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    current.next = newNode;
    current = newNode;
  }

  return head;
}

function printLinkedList(head) {
  let temp = head;

  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

function countNodes(head) {
  let temp = head;
  let count = 0;

  while (temp !== null) {
    count++;
    temp = temp.next;
  }

  return count;
}

let head = createLinkedList([10, 20, 30, 40]);
printLinkedList(head);
console.log("Total nodes:", countNodes(head));
