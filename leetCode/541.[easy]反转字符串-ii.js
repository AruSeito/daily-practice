/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let res = s.split("")
  for (let i = 0; i < s.length; i += 2 * k) {
    let slow = i, fast = i + k > s.length ? s.length - 1 : i + k - 1;
    while (slow < fast) {
      [res[slow], res[fast]] = [res[fast], res[slow]];
      slow++;
      fast--;
    }
  }
  return res.join("")
};
// @lc code=end

