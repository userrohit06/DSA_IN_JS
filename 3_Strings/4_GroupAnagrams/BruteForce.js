function groupAnagrams(arr = []) {
  let sortedWords = arr.map((word) =>
    String(word || "")
      .split("")
      .sort()
      .join(""),
  );

  let visited = Array.from({ length: arr.length }).fill(false);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;

    let group = [arr[i]];
    visited[i] = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (!visited[j] && sortedWords[i] === sortedWords[j]) {
        group.push(arr[j]);
        visited[j] = true;
      }
    }

    result.push(group);
  }

  return result;
}

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(arr));
