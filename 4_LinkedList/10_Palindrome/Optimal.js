class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

function isPalindrome(head) {
  if (head === null || head.next === null) return true;

  let slow = head;
  let fast = head;

  // Find middle
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf;

  // Even length
  if (fast === null) {
    secondHalf = reverseLinkedList(slow);
  }
  // Odd length
  else {
    secondHalf = reverseLinkedList(slow.next);
  }

  let first = head;
  let second = secondHalf;

  while (second !== null) {
    if (first.data !== second.data) return false;

    first = first.next;
    second = second.next;
  }

  return true;
}

// ---------------- TEST ----------------

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

console.log(isPalindrome(head)); // true
