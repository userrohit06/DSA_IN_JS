function nthRoot(n, m) {
  if (m === 0) return 0;
  if (m === 1) return 1;

  for (let i = 1; i <= m; i++) {
    const value = Math.pow(i, n);
    if (value === m) return i;
    if (value > m) break;
  }

  return -1;
}

console.log(nthRoot(3, 27)); // 3
console.log(nthRoot(4, 69)); // -1
console.log(nthRoot(5, 32)); // 2
