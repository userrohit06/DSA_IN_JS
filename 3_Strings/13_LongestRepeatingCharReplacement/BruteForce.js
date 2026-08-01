// function solution(str = "", k) {
//   let longest = 1;

//   for (let i = 0; i < str.length; i++) {
//     let count = 1;
//     let kCopy = k;

//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         count++;
//         continue;
//       } else {
//         if (kCopy > 0) {
//           count++;
//           kCopy--;
//         } else {
//           break;
//         }
//       }
//     }

//     longest = Math.max(longest, count);
//   }

//   return longest;
// }

// let str = "BAAA";
// let k = 1;

// console.log(solution(str, k));

function solution(str = "", k) {
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    let freq = {};
    let maxFreq = 0;

    for (let j = i; j < str.length; j++) {
      freq[str[j]] = (freq[str[j]] || 0) + 1;
      maxFreq = Math.max(maxFreq, freq[str[j]]);

      let windowLength = j - i + 1;
      let replacementsNeeded = windowLength - maxFreq;

      if (replacementsNeeded <= k) {
        longest = Math.max(longest, windowLength);
      }
    }
  }

  return longest;
}

let str = "BAAA";
let k = 1;

console.log(solution(str, k)); // 4
