/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

/**
 * @solution
 * 单调栈
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (num.length === k) return "0"
  let stack = [], newLength = num.length - k;
  for (let i = 0; i < num.length; i++) {
    while (stack.length && k && num[i] < stack[stack.length - 1]) {
      stack.pop();
      k--;
    }
    if (!(num[i] === "0" && stack.length === 0)) {
      stack.push(num[i]);
    }
  }
  while (k > 0) {
    stack.pop()
    k--;
  }
  return stack.length == 0 ? "0" : stack.join('');
};
// @lc code=end

