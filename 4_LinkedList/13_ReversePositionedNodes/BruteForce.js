class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reversePositionedNnodes(head, left, right) {
  if (head === null || left < 1 || left > right) return head;

  let curr = head;
  let position = 1;

  // move until curr points to left position
  while (position < left) {
    curr = curr.next;
    position++;
  }

  // store values
  let values = [];

  while (curr !== null && position <= right) {
    values.push(curr.data);
    curr = curr.next;
    position++;
  }

  // reverse values
  values.reverse();

  curr = head;
  position = 1;

  while (curr !== null && position < left) {
    curr = curr.next;
    position++;
  }

  // replace values
  let i = 0;

  while (curr !== null && position <= right) {
    curr.data = values[i];
    i++;

    curr = curr.next;
    position++;
  }

  return head;
}
