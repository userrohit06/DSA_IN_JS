function Node(data) {
  return {
    data,
    next: null,
  };
}

function searchInLinkedList(head, target) {
  if (head === null) return false;

  let temp = head;

  while (temp !== null) {
    if (temp.data === target) return true;
    temp = temp.next;
  }

  return false;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

console.log(searchInLinkedList(head, 10));
