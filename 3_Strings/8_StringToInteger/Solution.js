function stringToInteger(str = "") {
  let result = 0;
  let i = 0;
  let n = str.length;
  let sign = 1;

  // Skip all leading spaces
  while (i < n && str[i] === " ") {
    i++;
  }

  while (i < n) {
    if (result === 0 && (str[i] === "+" || str[i] === "-")) {
      if (str[i] === "-") sign = -1;
      i++;
      continue;
    }

    if (!(str[i] >= "0" && str[i] <= "9")) {
      break;
    }

    result = result * 10 + Number(str[i]);

    i++;
  }

  result *= sign;

  // Clamp to 32-bit signed integer range
  if (result > 2147483647) return 2147483647;
  if (result < -2147483648) return -2147483648;

  return result;
}

console.log(stringToInteger("42")); // 42
console.log(stringToInteger("   -42")); // -42
console.log(stringToInteger("4193 with words")); // 4193
console.log(stringToInteger("words and 987")); // 0
console.log(stringToInteger("+000123")); // 123
console.log(stringToInteger("-00123abc")); // -123
console.log(stringToInteger("234++234")); // 234
console.log(stringToInteger("23 242")); // 23
console.log(stringToInteger("-+2")); // 0
console.log(stringToInteger("999999999999999999")); // 2147483647
