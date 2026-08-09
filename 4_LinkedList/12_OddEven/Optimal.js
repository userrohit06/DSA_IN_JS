class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function oddEven(head) {
  let oddHead = head;
  let evenHead = head.next;

  let oddTail = oddHead;
  let evenTail = evenHead;

  while (evenTail !== null && evenTail.next !== null) {
    oddTail.next = evenTail.next;
    oddTail = oddTail.next;

    evenTail.next = oddTail.next;
    evenTail = evenTail.next;
  }

  oddTail.next = evenHead;

  return oddHead;
}
