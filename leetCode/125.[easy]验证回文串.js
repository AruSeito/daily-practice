/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValidChart = (chart) => {
  let lower = chart.toLocaleLowerCase();
  if ((lower >= "a" && lower <= "z") || (parseInt(lower) >= 0 && parseInt(lower) <= 9)) return true;
  return false;
}

var isPalindrome = function (s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (!isValidChart(s[left])) {
      left++;
      continue;
    }
    if (!isValidChart(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()) return false;
    left++;
    right--;
  }
  return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end