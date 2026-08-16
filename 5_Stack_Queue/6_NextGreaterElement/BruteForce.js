function nextGreaterElement(elements = []) {
  const result = [];

  for (let i = 0; i < elements.length; i++) {
    let firstGreater = -1;

    for (let j = i + 1; j < elements.length; j++) {
      if (elements[j] > elements[i]) {
        firstGreater = elements[j];
        break;
      }
    }

    result.push(firstGreater);
  }

  return result;
}

let elements = [4, 5, 2, 10, 8];
console.log(nextGreaterElement(elements));
