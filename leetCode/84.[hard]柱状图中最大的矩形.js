/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let res = 0, stack = [];
  heights = [0, ...heights, 0];
  stack.push(0);

  for (let i = 1; i < heights.length; i++) {
    let top = stack[stack.length - 1];
    if (heights[i] > heights[top]) {
      stack.push(i);
    } else if (heights[i] === heights[top]) {
      stack.pop();
      stack.push(i);
    } else {
      while (stack.length && heights[i] < heights[top]) {
        const mid = stack.pop();
        top = stack[stack.length - 1];
        let left = top;
        let right = i;
        let w = right - left - 1;
        let h = heights[mid];
        res = Math.max(res, w * h)
      };
      stack.push(i);
    }
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = largestRectangleArea;
// @after-stub-for-debug-end