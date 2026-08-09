class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function removeNthNodeFromEnd(head, nodeToRemoveFromEnd) {
  if (head === null) return null;

  let curr = head;
  let length = 0;

  // Find length
  while (curr !== null) {
    length++;
    curr = curr.next;
  }

  if (nodeToRemoveFromEnd > length) return head;

  // If head needs to be removed
  if (nodeToRemoveFromEnd === length) {
    return head.next;
  }

  // Find previous node
  let nodeToRemoveFromStart = length - nodeToRemoveFromEnd;

  curr = head;
  let count = 1;

  while (count < nodeToRemoveFromStart) {
    curr = curr.next;
    count++;
  }

  // Remove node
  curr.next = curr.next.next;

  return head;
}
