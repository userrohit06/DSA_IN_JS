class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function removeNthNodeFromEnd(head, n) {
  let dummy = new Node(-1);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  // Move fast n + 1 steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both until fast reaches the end
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the nth node from the end
  slow.next = slow.next.next;

  return dummy.next;
}
