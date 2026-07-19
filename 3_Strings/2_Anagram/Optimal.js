function isAnagram(str1 = "", str2 = "") {
  if (str1.length !== str2.length) return false;

  let count = {};

  for (let i = 0; i < str1.length; i++) {
    count[str1[i]] = (count[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    if (!count[str2[j]]) return false;
    count[str2[j]]--;
  }

  return true;
}

let str1 = "listeen";
let str2 = "tiesnle";

console.log(isAnagram(str1, str2));
