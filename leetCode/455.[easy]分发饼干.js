/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let res = 0;
  let i = g.length - 1, j = s.length - 1;
  while (i >= 0 && j >= 0) {
    if (s[j] >= g[i]) {
      res++;
      j--;
      i--;
    } else {
      i--;
      continue;
    }
  }
  return res;
};
// @lc code=end

