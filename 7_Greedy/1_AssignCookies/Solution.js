function assignCookie(children = [], cookieSizes = []) {
  children.sort((a, b) => a - b);
  cookieSizes.sort((a, b) => a - b);

  let childPointer = 0,
    sizePointer = 0;

  while (childPointer < children.length && sizePointer < cookieSizes.length) {
    if (children[childPointer] <= cookieSizes[sizePointer]) {
      // Cookie satisfies the child, move to next child
      childPointer++;
    }

    // Move to next cookie regardless of whether the current one is used
    sizePointer++;
  }

  return childPointer;
}
