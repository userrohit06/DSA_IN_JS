function moveZerosToEnd(arr = []) {
  if (arr.length === 0) return "Array is empty";

  let new_array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) new_array.push(arr[i]);
  }

  let remaining_zeros = arr.length - new_array.length;

  if (remaining_zeros === 0) return new_array;

  for (let j = 0; j < remaining_zeros; j++) {
    new_array.push(0);
  }

  return new_array;
}

let arr = [0, 1, 0, 3, 12];

console.log(moveZerosToEnd(arr));
