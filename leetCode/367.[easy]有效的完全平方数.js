/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

/**
 * @solution
 * 二分查找
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 2) return true;
  let left = 0, right = num;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid > num) {
      right = mid - 1;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      return true;
    }
  }
  return false;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPerfectSquare;
// @after-stub-for-debug-end