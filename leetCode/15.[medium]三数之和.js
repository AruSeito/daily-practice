/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b)
  const res = new Set();
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    let left = i + 1, right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) { right--; continue; }
      if (sum < 0) { left++; continue; }
      res.add(`${nums[i]},${nums[left]},${nums[right]}`);
      left++;
      right--;
    }
  }
  return Array.from(res).map(string => string.split(","));
};
// @lc code=end

