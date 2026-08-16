function isOperand(char) {
  return /[A-Za-z0-9]/.test(char);
}

function isOperator(char) {
  return (
    char === "+" || char === "-" || char === "*" || char === "/" || char === "^"
  );
}

function getPrecedence(operator) {
  if (operator === "^") return 3;
  if (operator === "*" || operator === "/") return 2;
  if (operator === "+" || operator === "-") return 1;
  return -1;
}

function infixToPostfix(expression = "") {
  let result = "";

  while (expression.length > 0) {
    // 1. Remove spaces
    expression = expression.replaceAll(" ", "");

    // 2. If the first character is an operand, directly add it to the result
    if (isOperand(expression[0])) {
      result += expression[0];
      expression = expression.slice(1);
      continue;
    }

    // 3. Find the operator with the highest precedence
    let highestIndex = -1;
    let highestPrecedence = -1;

    for (let index = 0; index < expression.length; index++) {
      const char = expression[index];

      if (char === "(") {
        continue;
      }

      if (char === ")") {
        continue;
      }

      if (isOperator(char)) {
        const precedence = getPrecedence(char);

        if (precedence > highestPrecedence) {
          highestPrecedence = precedence;
          highestIndex = index;
        }
      }
    }

    // 4. If we found an operator, process it
    if (highestIndex !== -1) {
      const operator = expression[highestIndex];

      const left = expression[highestIndex - 1];
      const right = expression[highestIndex + 1];

      result += left + right + operator;

      // Remove left operand, operator and right operand
      expression =
        expression.slice(0, highestIndex - 1) +
        expression.slice(highestIndex + 2);

      continue;
    }

    // 5. Remove parenthesis
    expression = expression.replace(/[()]/g, "");
  }

  return result;
}
