/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]];

  let i = 2;
  while (i < cost.length) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    i++;
  }
  return Math.min(dp[i - 1], dp[i - 2])
};
// @lc code=end

