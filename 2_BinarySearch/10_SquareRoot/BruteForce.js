function sqrt(el) {
  if (el === 0) return 0;

  for (let i = 1; i <= el; i++) {
    if (i * i > el) return i - 1;
  }

  return el;
}
