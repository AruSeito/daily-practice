/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

/**
 * @Solution
 * 逐位相加。
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const res = [];
  const n = num.length;
  for (let i = n - 1; i >= 0; i--) {
    let sum = num[i] + (k % 10);
    k = Math.floor(k / 10);
    if (sum >= 10) {
      k++;
      sum -= 10;
    }
    res.push(sum);
  }
  for (; k > 0; k = Math.floor(k / 10)) {
    res.push(k % 10);
  }
  return res.reverse();
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = addToArrayForm;
// @after-stub-for-debug-end
