function isValidBST(root) {
  // note: for each node, we need to check if the condition satisfies: lelftValue < currentValue < rightValue
  function validate(node, min, max) {
    // reached the end -> valid
    if (node === null) return true;

    // current value is outside allowed range
    if (node.value <= min || node.value >= max) return false;

    const leftValid = validate(node.left, min, node.value);
    const rightValid = validate(node.right, node.value, max);

    return leftValid && rightValid;
  }

  return validate(root, -Infinity, Infinity);
}
