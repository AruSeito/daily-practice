/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  let stringN = n.toString().split("");
  let flag = stringN.length;
  for (let i = stringN.length - 1; i > 0; i--) {
    if (stringN[i] < stringN[i - 1]) {
      flag = i;
      stringN[i - 1]--;
    }
  }
  for (let i = flag; i < stringN.length; i++) {
    stringN[i] = "9"
  }
  return parseInt(stringN.join(""));
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = monotoneIncreasingDigits;
// @after-stub-for-debug-end