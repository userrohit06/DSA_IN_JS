function isIsomorphic(s = "", t = "") {
  if (s.length !== t.length) return false;

  let mapST = new Map();
  let mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    let chS = s[i];
    let chT = t[i];

    if (mapST.has(chS)) {
      if (mapST.get(chS) !== chT) return false;
    } else {
      mapST.set(chS, chT);
    }

    if (mapTS.has(chT)) {
      if (mapTS.get(chT) !== chS) return false;
    } else {
      mapTS.set(chT, chS);
    }
  }

  return true;
}

console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("ab", "aa")); // false
