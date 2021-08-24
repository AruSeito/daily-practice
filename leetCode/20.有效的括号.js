/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

/**
 * @Solution
 * 思路：栈，左括号入栈，遇到右括号时就出栈，如果出栈的值不是与右括号成对的就返回false，判断栈的长度，如果栈为空返回true
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const length = s.length;
  if (length % 2 === 1) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
      case "[":
      case "{":
        stack.push(s[i]);
        break;
      case ")": {
        const tmp = stack.pop();
        if (tmp !== "(") return false;
        break;
      }
      case "]": {
        const tmp = stack.pop();
        if (tmp !== "[") return false;
        break;
      }
      case "}": {
        const tmp = stack.pop();
        if (tmp !== "{") return false;
        break;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end
