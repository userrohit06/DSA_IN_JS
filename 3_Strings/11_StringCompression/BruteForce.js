function stringCompression(arr = []) {
  let result = [];
  let i = 0;

  while (i < arr.length) {
    let count = 1;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      } else {
        break;
      }
    }

    result.push(arr[i]);
    if (count > 1) result.push(String(count));

    i += count;
  }

  return { result, length: result.length };
}

let input = ["a", "a", "a", "b", "a"];
console.log(stringCompression(input));
