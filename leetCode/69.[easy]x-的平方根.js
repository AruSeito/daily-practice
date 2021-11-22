/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

/**
 * @solution
 * 二分查找
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0, right = x, ans = -1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      ans = mid;
      left = mid + 1;
    }
  }
  return ans;

};
// @lc code=end

