function firstOccuranceOfString(haystack = "", needle = "") {
  let n = haystack.length;
  let m = needle.length;

  if (m > n) return -1;
  if (m === 0) return 0;

  // try every possible starting position
  for (let start = 0; start < n - m; start++) {
    let j = 0;

    // compare entire needle
    while (j < m && haystack[start + j] === needle[j]) {
      j++;
    }

    // all characters matched
    if (j === m) return start;
  }

  return -1;
}

let haystack = "mississippi";
let needle = "issip";

console.log(firstOccuranceOfString(haystack, needle));
