function groupAnagrams(arr = []) {
  let groups = new Map();

  for (let word of arr) {
    // create the key by sorting the word
    let sortedWord = word.split("").sort().join("");

    // if this key doesn't exist, create an empty array
    if (!groups.has(sortedWord)) {
      groups.set(sortedWord, []);
    }

    // add the original word to its group
    groups.get(sortedWord).push(word);
  }

  return [...groups.values()];
}

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(arr));
