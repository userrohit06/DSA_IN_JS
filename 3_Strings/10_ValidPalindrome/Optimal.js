function validPalindrome(str = "") {
  let strCopy = str.toLowerCase();
  let left = 0,
    right = strCopy.length - 1;

  while (left <= right) {
    if (
      !(
        (strCopy[left] >= "0" && strCopy[left] <= "9") ||
        (strCopy[left] >= "a" && strCopy[left] <= "z")
      )
    ) {
      left++;
      continue;
    }

    if (
      !(
        (strCopy[right] >= "0" && strCopy[right] <= "9") ||
        (strCopy[right] >= "a" && strCopy[right] <= "z")
      )
    ) {
      right--;
      continue;
    }

    if (strCopy[left] !== strCopy[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

let input = "A man, a plan, a canal: Panama";
console.log(validPalindrome(input));
