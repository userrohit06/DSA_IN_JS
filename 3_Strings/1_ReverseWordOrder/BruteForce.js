function reverseWordOrder(str = "") {
  let words = [];
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else if (word.length > 0) {
      words.push(word);
      word = "";
    }
  }

  if (word.length > 0) {
    words.push(word);
  }

  let result = "";

  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i > 0) result += " ";
  }

  return result;
}

console.log(reverseWordOrder("I love JavaScript"));
