function reverse(arr = [], left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

function reverseWords(str = "") {
  let arr = str.trim().replace(/\s+/g, " ").split("");
  return arr;

  reverse(arr, 0, str.length - 1);

  let start = 0;

  for (let end = 0; end <= arr.length; end++) {
    if (end === arr.length || arr[end] === " ") {
      reverse(arr, start, end);
      start = end + 1;
    }
  }

  return arr.join("");
}

console.log(reverseWords("I love JavaScript"));
