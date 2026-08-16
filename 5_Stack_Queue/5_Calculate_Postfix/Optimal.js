function calculatePostfix(expression) {
  const stack = [];

  for (const char of expression) {
    // operand
    if (!isOperator(char)) {
      stack.push(Number(char));
      continue;
    }

    // operator
    const right = stack.pop();
    const left = stack.pop();

    let result;

    if (char === "+") {
      result = left + right;
    } else if (char === "-") {
      result = left - right;
    } else if (char === "*") {
      result = left * right;
    } else if (char === "/") {
      result = left / right;
    }

    stack.push(result);
  }

  return stack.pop();
}

function isOperator(char) {
  return char === "+" || char === "-" || char === "*" || char === "/";
}
