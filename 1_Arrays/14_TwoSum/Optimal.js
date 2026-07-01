function twoSum(arr = [], target) {
  let seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    // Current number
    let current = arr[i];

    // Number needed to make target
    let need = target - current;

    // Have we already seen the needed number?
    if (seen.has(need)) {
      return [seen.get(need), i];
    }

    // If not, remember current number and its index
    seen.set(current, i);
  }

  return [-1, -1];
}

console.log(twoSum([3, 8, 2, 1, 9, 10], 19));
