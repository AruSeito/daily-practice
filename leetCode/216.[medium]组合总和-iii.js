/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const path = [], res = [];
  let sum = 0;
  const treeBack = (k, n, startIndex) => {
    // if (sum > n) return; 剪叶
    if (sum === n && path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i <= 9; i++) {

      // for (let i = startIndex; i <= 9-(k-path.length) + 1; i++) {剪叶
      path.push(i);
      sum += i;
      treeBack(k, n, i + 1);
      path.pop();
      sum -= i;
    }
  }
  treeBack(k, n, 1);
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combinationSum3;
// @after-stub-for-debug-end