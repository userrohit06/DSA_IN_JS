// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function mergedLinkedList(head1, head2) {
//   if (head1 === null) return head1;
//   if (head2 === null) return head2;

//   let head = null;
//   let tail = null;

//   // decide the fist node
//   if (head1.data <= head2.data) {
//     head = head1;
//     tail = head1;
//     head1 = head1.next;
//   } else {
//     head = head2;
//     tail = head2;
//     head2 = head2.next;
//   }

//   // merge both lists
//   while (head1 !== null && head2 !== null) {
//     if (head1.data <= head2.data) {
//       tail.next = head1;
//       tail = head1;
//       head1 = head1.next;
//     } else {
//       tail.next = head2;
//       tail = head2;
//       head2 = head2.next;
//     }
//   }

//   // add remaining nodes for head1
//   while (head1 !== null) {
//     tail.next = head1;
//   }

//   // add remaining nodes for head2
//   while (head2 !== null) {
//     tail.next = head2;
//   }
// }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeLinkedList(head1, head2) {
  let dummy = new Node(-1);
  let tail = dummy;

  while (head1 !== null && head2 !== null) {
    if (head1.data <= head2.data) {
      tail.next = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      head2 = head2.next;
    }

    tail = tail.next;
  }

  if (head1 !== null) {
    tail.next = head1;
  }

  if (head2 !== null) {
    tail.next = head2;
  }

  return dummy.next;
}
