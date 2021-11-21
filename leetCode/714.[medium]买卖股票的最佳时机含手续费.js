/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // let res = 0;
  // let min = prices[0];

  // for (let i = 1; i < prices.length; i++) {
  //   if (prices[i] < min) min = prices[i];

  //   // 保持原有状态（因为此时买则不便宜，卖则亏本），注释掉是因为加上会超时，其实不加上也无所谓。
  //   // if(prices[i]>=min && prices[i]<=min+fee) continue

  //   if (prices[i] > min + fee) {
  //     res += prices[i] - min - fee;
  //     min = prices[i] - fee;
  //   }
  // }
  // return res;
  let dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));
  dp[0][0] -= prices[0];


  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
  }

  return Math.max(...dp[prices.length - 1])
};
// @lc code=end

