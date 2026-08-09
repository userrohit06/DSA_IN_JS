class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function convertArrayToList(arr = []) {
  let head = new Node(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new Node(arr[i]);
    curr.next = newNode;
    curr = newNode;
  }

  return head;
}

function mergedLinkedList(head1, head2) {
  if (head1 === null && head2 === null) return null;

  let temp = [];

  let curr1 = head1;

  while (curr1 !== null) {
    temp.push(curr1.data);
    curr1 = curr1.next;
  }

  let curr2 = head2;

  while (curr2 !== null) {
    temp.push(curr2.data);
    curr2 = curr2.next;
  }

  temp.sort((a, b) => a - b);

  const newHead = convertArrayToList(temp);
  return newHead;
}
