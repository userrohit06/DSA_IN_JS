class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isPalindrome(head) {
  let temp = [];
  let curr = head;

  while (curr !== null) {
    temp.push(curr.data);
    curr = curr.next;
  }

  let i = 0,
    j = temp.length - 1;

  while (i < j) {
    if (temp[i] !== temp[j]) return false;
    i++;
    j--;
  }

  return true;
}
