let maxProfit = function (arr) {
  let minPrice = Infinity;
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }
    profit = Math.max(profit, arr[i] - minPrice);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
