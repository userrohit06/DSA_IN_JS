function infixToPostfix(expression = "") {
  const stack = [];
  let result = "";

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };

  const isOperand = (char) => {
    return /[A-Za-z0-9]/.test(char);
  };

  for (const char of expression) {
    // 1. Operand -> directly add to result
    if (isOperand(char)) result += char;
    // 2. Opening parenthesis -> push to stack
    else if (char === "(") stack.push(char);
    // 3. Closing parenthesis
    else if (char === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }

      // Remove '('
      stack.pop();
    }

    // 4. Operator
    else {
      while (
        stack.length &&
        stack[stack.length - 1] !== "(" &&
        precedence[stack[stack.length - 1]] >= precedence[char]
      ) {
        result += stack.pop();
      }

      stack.push(char);
    }
  }

  // 5. Empty remaining operators from stack
  while (stack.length) {
    result += stack.pop();
  }

  return result;
}
