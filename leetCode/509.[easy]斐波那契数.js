/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const dp = [0, 1];
  if (n <= 1) return dp[n];

  let i = 2;
  while (i <= n) {
    dp[i] = dp[i - 2] + dp[i - 1];
    i++;
  }
  return dp[n]
};
// @lc code=end

