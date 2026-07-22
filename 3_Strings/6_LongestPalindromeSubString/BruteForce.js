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
  let maxStr = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let currStr = str.slice(i, j + 1);

      if (isPalindrome(currStr) && currStr.length > maxStr.length) {
        maxStr = currStr;
      }
    }
  }

  return maxStr;
}

let str = "forgeeksskeegfor";

console.log(longestPalindromeSubString(str));
