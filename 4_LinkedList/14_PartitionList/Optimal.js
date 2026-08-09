class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function partitionList(head, target) {
  let lessDummy = new Node(-1);
  let greaterDummy = new Node(-1);

  let lessTail = lessDummy;
  let greaterTail = greaterDummy;

  let curr = head;

  while (curr !== null) {
    if (curr.data < target) {
      lessTail.next = curr;
      lessTail = lessTail.next;
    } else {
      greaterTail.next = curr;
      greaterTail = greaterTail.next;
    }

    curr = curr.next;
  }

  lessTail.next = greaterDummy.next;

  return lessDummy.next;
}
