// NOTE:
// This solution assumes we already have a function that generates
// all permutations of the array.
//
// Time  : O(n! × n)
// Space : O(n!)

function nextPermutationBrute(arr) {
  // Step 1: Generate all permutations
  let permutations = generateAllPermutations(arr);

  // Step 2: Sort them lexicographically
  permutations.sort();

  // Step 3: Find current permutation
  for (let i = 0; i < permutations.length; i++) {
    if (arraysEqual(permutations[i], arr)) {
      // Step 4: Return next permutation
      if (i === permutations.length - 1) {
        return permutations[0];
      }

      return permutations[i + 1];
    }
  }
}
