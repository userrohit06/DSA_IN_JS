class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function arrayToLinkedList(arr = []) {
  if (arr.length === 0) return null;

  let head = new Node(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    let currNode = new Node(arr[i]);
    curr.next = currNode;
    curr = currNode;
  }

  return head;
}

function oddEven(head) {
  let oddArr = [],
    evenArr = [];
  let curr = head;
  let count = 1;

  while (curr !== null) {
    if (count % 2 === 0) evenArr.push(curr.data);
    else oddArr.push(curr.data);

    count++;
    curr = curr.next;
  }

  let head1 = arrayToLinkedList(oddArr);
  let head2 = arrayToLinkedList(evenArr);

  let curr1 = head1;

  while (curr1 !== null) {
    curr1 = curr1.next;
  }

  curr1.next = head2;

  return head1;
}
