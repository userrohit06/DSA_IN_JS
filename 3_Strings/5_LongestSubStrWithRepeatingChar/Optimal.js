function longestSubStrWithoutRepeatingChar(str = "") {
  let left = 0;
  let maxLength = 0;
  let maxStr = "";

  let set = new Set();

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);

    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      maxStr = str.slice(left, right + 1);
    }
  }

  return maxStr;
}

let str = "abcabcbb";

console.log(longestSubStrWithoutRepeatingChar(str)); // "abc"
