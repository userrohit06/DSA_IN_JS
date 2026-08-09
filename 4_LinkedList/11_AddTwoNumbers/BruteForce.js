class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function arrayToLinkedList(arr = []) {
  if (arr.length === 0) return null;

  let head = new Node(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    let currNode = new Node(arr[i]);
    curr.next = currNode;
    curr = currNode;
  }

  return head;
}

function addTwoNumbers(head1, head2) {
  let arr1 = [];
  let arr2 = [];

  let curr1 = head1;

  while (curr1 !== null) {
    arr1.push(curr1.data);
    curr1 = curr1.next;
  }

  let curr2 = head2;

  while (curr2 !== null) {
    arr2.push(curr2.data);
    curr2 = curr2.next;
  }

  arr1.reverse();
  arr2.reverse();

  let i = arr1.length - 1;
  let j = arr2.length - 1;

  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;

    if (i >= 0) sum += arr1[i--];
    if (j >= 0) sum += arr2[j--];

    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  return arrayToLinkedList(result);
}
