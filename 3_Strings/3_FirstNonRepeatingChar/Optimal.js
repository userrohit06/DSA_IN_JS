function firstNonRepeatingChar(str = "") {
  if (str.length === 0) return "";
  if (str.length === 1) return str[0];

  let freqMap = new Map();

  for (let ch of str) {
    freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
  }

  for (let ch of str) {
    if (freqMap.get(ch) === 1) {
      return ch;
    }
  }

  return "";
}

console.log(firstNonRepeatingChar("leetclode"));
