function isValid(str = "") {
  const stack = [];

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of str) {
    // opening bracket
    if (char === "(" || char === "[" || char === "{") stack.push(char);
    // closing bracket
    else {
      if (stack.length === 0) return false;

      const top = stack.pop();

      if (top !== pairs[char]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid(""));
