/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  const dp = new Array(nums.length + 1).fill(1);
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) dp[i] = dp[i - 1] + 1;
    if (dp[i] > result) result = dp[i];
  }
  return result;
};
// @lc code=end
