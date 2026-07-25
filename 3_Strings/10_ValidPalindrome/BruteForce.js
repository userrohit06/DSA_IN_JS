function validPalindrome(originalStr = "") {
  let strCopy = originalStr.toLowerCase();
  let normalizedStr = "";

  for (let i = 0; i < strCopy.length; i++) {
    if (
      (strCopy[i] >= "0" && strCopy[i] <= "9") ||
      (strCopy[i] >= "a" && strCopy[i] <= "z")
    ) {
      normalizedStr += strCopy[i];
    }
  }

  let reversedStr = "";

  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }

  if (normalizedStr === reversedStr) return true;

  return false;
}

let input = "A man, a plan, a canal: Panama";
console.log(validPalindrome(input));
