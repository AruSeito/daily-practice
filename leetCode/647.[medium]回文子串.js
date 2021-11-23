/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const dp = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false));

  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - 1 <= 1) {
          res++;
          dp[i][j] = true;
        } else if (dp[i + 1][j - 1]) {
          res++;
          dp[i][j] = true;
        }
      }
    }
  }
  return res;
};
// @lc code=end

