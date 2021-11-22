/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let cover = 0;
  if (nums.length === 1) return true;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(i + nums[i], cover);
    if (cover >= nums.length) return true;
  }
  return false;
};
// @lc code=end

