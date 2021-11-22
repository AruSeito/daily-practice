/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = i;
  }

  let start = 0, end = 0, res = [];

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, obj[s[i]]);
    if (end === i) {
      res.push(end - start + 1);
      start = i + 1;
    }
  }
  return res;
};
// @lc code=end

