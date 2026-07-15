function sqrt(x) {
  if (x === 0) return 0;

  let low = 1,
    high = x;
  let ans = 0;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (mid <= Math.floor(x / mid)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
}

console.log(sqrt(24));
