/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const robRange = (start, end) => {
    if (start === end) return nums[start];

    const dp = new Array(nums.length).fill(0);
    dp[start] = nums[start];
    dp[start + 1] = Math.max(nums[start + 1], nums[start]);

    for (let i = start + 2; i <= end; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[end];
  }

  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const result = robRange(0, nums.length - 2);
  const result2 = robRange(1, nums.length - 1);

  return Math.max(result, result2);
};
// @lc code=end

