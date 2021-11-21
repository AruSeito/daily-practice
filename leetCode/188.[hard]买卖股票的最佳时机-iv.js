/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices.length === 0 || k === 0) return 0;
  const dp = new Array(prices.length).fill(0).map(() => new Array(2 * k + 1).fill(0));
  dp[0][0] = 0;
  for (let i = 1; i <= 2 * k + 1; i = i + 2) {
    dp[0][i] -= prices[0]
  }


  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = dp[i - 1][0];
    for (let j = 1; j <= 2 * k + 1; j = j + 2) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i]);
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] + prices[i]);
    }
  }
  return dp[prices.length - 1][2 * k];
};
// @lc code=end

