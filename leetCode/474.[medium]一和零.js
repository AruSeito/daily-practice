/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let s = 0; s < strs.length; s++) {
    let zeroNum = 0, oneNum = 0;
    for (let c = 0; c < strs[s].length; c++) {
      if (strs[s][c] === "0") zeroNum++;
      if (strs[s][c] === "1") oneNum++;
    }

    for (let o = n; o >= oneNum; o--) {
      for (let z = m; z >= zeroNum; z--) {
        dp[z][o] = Math.max(dp[z][o], dp[z - zeroNum][o - oneNum] + 1)
      }
    }
  }
  return dp[m][n]
};
// @lc code=end

