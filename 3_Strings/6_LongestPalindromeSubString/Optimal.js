function isPalindrome(str = "") {
  let left = 0,
    right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }

  return true;
}

function longestPalindromeSubString(str = "") {
  if (str.length <= 1) return str;

  let start = 0;
  let maxLength = 1;

  function expand(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      let currLength = right - left + 1;

      if (currLength > maxLength) {
        maxLength = currLength;
        start = left;
      }

      left--;
      right++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    // odd length palindrome
    expand(i, i);

    // even length palindrome
    expand(i, i + 1);
  }

  return str.slice(start, start + maxLength);
}

let str = "forgeeksskeegfor";

console.log(longestPalindromeSubString(str));
