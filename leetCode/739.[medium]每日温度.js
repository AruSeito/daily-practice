/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

/**
 * @solution
 * 单调栈，直接套模板就可以，只不过往栈里存的不是值了，存索引
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let res = [], stack = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }
    res[i] = stack.length ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = dailyTemperatures;
// @after-stub-for-debug-end