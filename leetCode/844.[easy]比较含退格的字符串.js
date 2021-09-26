/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

/**
 * @solution
 * 用栈也可以做
 * 双指针:见https://leetcode-cn.com/problems/backspace-string-compare/solution/shuang-zhi-zhen-bi-jiao-han-tui-ge-de-zi-8fn8/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let pS = s.length - 1, pT = t.length - 1, skipS = 0, skipT = 0;
  while (pS >= 0 || pT >= 0) {
    while (pS >= 0) {
      if (s[pS] === "#") {
        pS--;
        skipS++;
      } else if (skipS > 0) {
        skipS--;
        pS--;
      } else {
        break;
      }
    }
    while (pT >= 0) {
      if (t[pT] === "#") {
        pT--;
        skipT++;
      } else if (skipT > 0) {
        skipT--;
        pT--;
      } else {
        break;
      }
    }
    if (s[pS] !== t[pT]) return false;
    pS--;
    pT--;
  }
  return true;
};
// @lc code=end

