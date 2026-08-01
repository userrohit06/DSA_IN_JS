function stringCompression(arr = []) {
  let i = 0,
    j = 0;
  let result = [];
  let count = 0;

  while (i <= j && j < arr.length) {
    if (arr[i] === arr[j]) {
      count++;
      j++;
    } else {
      result.push(arr[i]);

      if (count > 1) {
        for (let digit of String(count)) {
          result.push(digit);
        }
      }

      count = 0;
      i = j;
    }
  }

  // Process the last group
  result.push(arr[i]);

  if (count > 1) {
    for (let digit of String(count)) {
      result.push(digit);
    }
  }

  return {
    result,
    length: result.length,
  };
}

let arr = ["a", "a", "a", "b", "a", "a"];

console.log(stringCompression(arr));
