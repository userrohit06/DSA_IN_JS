class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function intersection(head1, head2) {
  const set = new Set();
  let curr1 = head1;
  let curr2 = head2;

  while (curr1 !== null) {
    set.add(curr1);
    curr1 = curr1.next;
  }

  while (curr2 !== null) {
    if (set.has(curr2)) return curr2;
    curr2 = curr2.next;
  }

  return null;
}
