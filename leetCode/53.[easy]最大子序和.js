/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // let sum = 0, res = Number.MIN_SAFE_INTEGER;

  // for (let i = 0; i < nums.length; i++) {
  //   if (sum > res) res = sum;
  //   if (sum < 0) sum = 0;
  // }

  // return res;
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    if (dp[i] > res) res = dp[i];
  }

  return res;
};
// @lc code=end

