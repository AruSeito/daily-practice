/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const path = [], res = [];

  const treeback = (n, k, startIndex) => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      //     for (let i = startIndex; i <= n - (k - path.length ) +1; i++) { 剪叶子
      path.push(i);
      treeback(n, k, i + 1);
      path.pop();
    }
  }
  treeback(n, k, 1);

  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combine;
// @after-stub-for-debug-end