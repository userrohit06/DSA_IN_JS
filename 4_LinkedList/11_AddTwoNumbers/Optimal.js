class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function addTwoNumbers(head1, head2) {
  let dummy = new Node(-1);
  let tail = dummy;
  let carry = 0;

  let curr1 = head1;
  let curr2 = head2;

  while (curr1 !== null || curr2 !== null || carry > 0) {
    let sum = carry;

    if (curr1 !== null) {
      sum += curr1.data;
    }

    if (curr2 !== null) {
      sum += curr2.data;
    }

    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    tail.next = new Node(digit);
    tail = tail.next;

    if (curr1 !== null) curr1 = curr1.next;
    if (curr2 !== null) curr2 = curr2.next;
  }

  return dummy.next;
}
