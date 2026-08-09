class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function convertArrayToLinkedList(arr = []) {
  if (arr.length === 0) return null;

  let head = new Node(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new Node(arr[i]);
    curr.next = newNode;
    curr = newNode;
  }

  return head;
}

function partitionList(head, target) {
  let curr = head;
  let valuesLessThanTarget = [],
    valuesGreaterThanEqualToTarget = [];

  while (curr !== null) {
    if (curr.data < target) {
      valuesLessThanTarget.push(curr.data);
    } else {
      valuesGreaterThanEqualToTarget.push(curr.data);
    }

    curr = curr.next;
  }

  let result = [...valuesLessThanTarget, ...valuesGreaterThanEqualToTarget];

  return convertArrayToLinkedList(result);
}
