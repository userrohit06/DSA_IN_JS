class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function intersection(head1, head2) {
  let curr1 = head1;
  let curr2 = head2;

  let length1 = 0;
  let length2 = 0;

  while (curr1 !== null) {
    length1++;
    curr1 = curr1.next;
  }

  while (curr2 !== null) {
    length2++;
    curr2 = curr2.next;
  }

  curr1 = head1;
  curr2 = head2;

  let diff = Math.abs(length1 - length2);

  for (let i = 0; i < diff; i++) {
    if (length1 > length2) {
      curr1 = curr1.next;
    } else {
      curr2 = curr2.next;
    }
  }

  while (curr1 !== null && curr2 !== null) {
    if (curr1 === curr2) return curr1;
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  return null;
}
