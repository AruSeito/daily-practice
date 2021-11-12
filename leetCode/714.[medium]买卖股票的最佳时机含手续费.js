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
  let res = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];

    // 保持原有状态（因为此时买则不便宜，卖则亏本），注释掉是因为加上会超时，其实不加上也无所谓。
    // if(prices[i]>=min && prices[i]<=min+fee) continue

    if (prices[i] > min + fee) {
      res += prices[i] - min - fee;
      min = prices[i] - fee;
    }
  }
  return res;
};
// @lc code=end

