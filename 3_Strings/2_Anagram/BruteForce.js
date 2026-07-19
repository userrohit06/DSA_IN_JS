function isAnagram(str1 = "", str2 = "") {
  if (str1.length !== str2.length) return false;

  let updatedStr1 = str1.trim().split("").sort().join("");
  let updatedStr2 = str2.trim().split("").sort().join("");

  if (updatedStr1 === updatedStr2) return true;

  return false;
}

let str1 = "listen";
let str2 = "tisnlee";

console.log(isAnagram(str1, str2));
