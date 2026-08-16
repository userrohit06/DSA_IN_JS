function nextGreaterElement(elements = []) {
  let stack = [];
  const result = Array.from(elements.length);

  for (let i = elements.length - 1; i >= 0; i--) {
    const current = elements[i];

    // remove elements that cannot be the answer
    while (stack.length > 0 && stack[stack.length - 1] <= current) stack.pop();

    // if stack is empty, there is no greater element
    if (stack.length === 0) {
      result[i] = -1;
    } else {
      result[i] = stack[stack.length - 1];
    }

    // current element can be useful for elements to its left
    stack.push(current);
  }

  return result;
}

let elements = [4, 5, 2, 10, 8];
console.log(nextGreaterElement(elements));
