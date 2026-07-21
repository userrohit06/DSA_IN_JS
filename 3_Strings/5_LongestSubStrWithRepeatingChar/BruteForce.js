function longestSubStrWithRepeatingChar(str = "") {
  let maxStr = "";

  for (let i = 0; i < str.length; i++) {
    let currStr = str[i];

    for (let j = i + 1; j < str.length; j++) {
      if (!currStr.includes(str[j])) currStr += str[j];
      else break;
    }

    if (currStr.length > maxStr.length) maxStr = currStr;
  }

  return maxStr;
}

let str = "dvdf";

console.log(longestSubStrWithRepeatingChar(str));
