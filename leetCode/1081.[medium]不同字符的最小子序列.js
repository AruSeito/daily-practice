/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

/**
 * @solution
 * 见316
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  let countChar = {};
  for (let i = 0; i < s.length; i++) {
    countChar[s[i]] = countChar[s[i]] + 1 || 1;
  }
  let hasChar = {},
    stack = [];
  for (let i = 0; i < s.length; i++) {
    countChar[s[i]] = countChar[s[i]] - 1;
    if (hasChar[s[i]]) continue;
    while (stack.length && s[i] < stack[stack.length - 1]) {
      if (countChar[stack[stack.length - 1]] === 0) break;
      hasChar[stack.pop()] = false;
    }
    stack.push(s[i]);
    hasChar[s[i]] = true;
  }
  return stack.join("");
};
// @lc code=end
