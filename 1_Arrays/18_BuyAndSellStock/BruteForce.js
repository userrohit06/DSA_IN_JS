function buyAndSellStock(arr = []) {
  let n = arr.length;
  let maxProfit = 0;

  for (let i = 0; i < n - 1; i++) {
    let profit = 0;

    for (j = i + 1; j < n; j++) {
      profit = arr[j] - arr[i];
      if (profit > maxProfit) maxProfit = profit;
    }
  }

  return maxProfit;
}

let arr = [7, 1, 5, 3, 6, 4];
console.log(buyAndSellStock(arr));
