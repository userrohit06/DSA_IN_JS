function buyAndSellStock(arr = []) {
  let n = arr.length;
  let maxProfit = 0;
  let minPrice = arr[0];

  for (let i = 1; i < n; i++) {
    let profit = arr[i] - minPrice;
    minPrice = Math.min(minPrice, arr[i]);
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}

let arr = [7, 1, 5, 3, 11, 4];
console.log(buyAndSellStock(arr));
