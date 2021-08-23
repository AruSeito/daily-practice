/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

/**
 *
 * @Solution
 * 类型:数学题
 * 解法一：当成字符串来做 split->reverse->join->Number();
 * 解法二：循环取余*10
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let newNumber = Math.abs(x);
  let res = 0;
  while (newNumber !== 0) {
    res = res * 10 + (newNumber % 10);
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 21)) return 0;
    newNumber = Math.floor(newNumber / 10);
  }
  return x >= 0 ? res : -1 * res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverse;
// @after-stub-for-debug-end
