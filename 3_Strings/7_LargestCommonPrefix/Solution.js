function largestCommonPrefix(arr = []) {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];

  let strToCompare = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let prefix = "";

    for (let j = 0; j < Math.min(strToCompare.length, arr[i].length); j++) {
      if (strToCompare[j] === arr[i][j]) {
        prefix += arr[i][j];
      } else {
        break;
      }
    }

    strToCompare = prefix;
    if (strToCompare === "") return "";
  }

  return strToCompare;
}

let arr = ["flower", "flow", "floight"];
console.log(largestCommonPrefix(arr));
