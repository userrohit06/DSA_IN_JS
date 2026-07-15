function nthRoot(n, m) {
  // Set low and high for binary search
  let low = 1,
    high = m;

  // Start binary search
  while (low <= high) {
    // Calculate mid
    let mid = Math.floor((low + high) / 2);

    // Store result of mid^n
    let ans = 1;
    for (let i = 0; i < n; i++) {
      ans *= mid;
      if (ans > m) break;
    }

    // If mid^n equals m
    if (ans === m) return mid;

    // If mid^n is less than m
    if (ans < m) low = mid + 1;
    // If mid^n is more than m
    else high = mid - 1;
  }

  // Return -1 if not found
  return -1;
}
