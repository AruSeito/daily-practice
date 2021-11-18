/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];

  if (Math.abs(target) > sum) return 0;
  if ((sum + target) % 2 === 1) return 0;
  const bagSize = (sum + target) / 2;
  const dp = new Array(bagSize + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  return dp[bagSize]
};
// @lc code=end

