class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

// 1. Create DLL
function createDLL(arr = []) {
  if (arr.length === 0) return null;

  const head = new Node(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    curr.next = newNode;
    newNode.prev = curr;
    curr = newNode;
  }

  return head;
}

// 2. Insert At Head
function insertAtHead(head, data) {
  if (head === null) return new Node(data);

  const newHead = new Node(data);
  newHead.next = head;
  head.prev = newHead;

  return newHead;
}

// 3. Insert At Tail
function insertAtTail(head, data) {
  if (head === null) return new Node(data);

  const newNode = new Node(data);
  let curr = head;

  while (curr.next !== null) {
    curr = curr.next;
  }

  curr.next = newNode;
  newNode.prev = curr;

  return head;
}

// 4. Delete a Node
function deleteNode(head, node) {
  if (head === null || node === null) return head;

  let curr = head;

  // Delete head
  if (curr === node) {
    head = curr.next;

    if (head !== null) {
      head.prev = null;
    }

    return head;
  }

  while (curr !== null && curr !== node) {
    curr = curr.next;
  }

  // Node not found
  if (curr === null) return head;

  // Delete tail
  if (curr.next === null) {
    curr.prev.next = null;
    return head;
  }

  // Delete middle
  curr.prev.next = curr.next;
  curr.next.prev = curr.prev;

  return head;
}

let curr = createDLL([10, 20, 30, 40]);
let newHead = insertAtHead(curr, 5);
let head = insertAtTail(newHead, 50);

let nodeToDelete = head.next.next.next.next.next;
head = deleteNode(head, nodeToDelete);

while (head !== null) {
  console.log(head.data);
  head = head.next;
}
