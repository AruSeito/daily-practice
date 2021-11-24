/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 2) return 0;
  const maxLeft = new Array(height.length).fill(0);
  const maxRight = new Array(height.length).fill(0);

  maxLeft[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
  }

  maxRight[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    maxRight[i] = Math.max(height[i], maxRight[i + 1]);
  }
  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    let count = Math.min(maxLeft[i], maxRight[i]) - height[i];
    if (count > 0) sum += count;
  }
  return sum;
};
// @lc code=end

