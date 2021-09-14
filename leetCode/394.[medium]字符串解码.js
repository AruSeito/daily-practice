/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

/**
 * @solution
 * 栈：遇到非"]'全都进栈，遇到“["开始操作：先用一个数组存要重复的字符串，然后再用一个数字记录要重复的次数。重复即可。
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let tmp = [];
      while (stack[stack.length - 1] !== "[") {
        tmp.unshift(stack.pop())
      }
      stack.pop();
      let number = 0, k = 0;
      while (Number(stack[stack.length - 1]) >= 0 && stack[stack.length - 1] <= 9) {
        number = Number(stack.pop()) * Math.pow(10, k++) + number;

      }

      while (Number(number) > 0) {
        stack.push(tmp.join(""));
        number--;
      }
    }

  }
  return stack.join("");
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = decodeString;
// @after-stub-for-debug-end