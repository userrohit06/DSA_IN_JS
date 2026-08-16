function calculatePostfix(expression) {
  expression = [...expression];

  while (expression.length > 1) {
    let found = false;

    for (let i = 0; i < expression.length; i++) {
      const current = expression[i];

      // find an operator
      if (isOperator(current)) {
        const left = Number(expression[i - 2]);
        const right = Number(expression[i - 1]);

        let result;

        if (current === "+") {
          result = left + right;
        } else if (current === "-") {
          result = left - right;
        } else if (current === "*") {
          result = left * right;
        } else if (current === "/") {
          result = left / right;
        }

        // replace: operand operand operator
        // with: result

        expression.slice(i - 2, 3, result);

        found = true;
        break;
      }
    }

    if (!found) {
      throw new Error("Invalid postfix expression");
    }
  }

  return expression[0];
}

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}
