/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  let curCover = 0, nextCover = 0, ans = 0;
  for (let i = 0; i < nums.length; i++) {
    nextCover = Math.max(i + nums[i], nextCover);
    if (i === curCover) {
      if (curCover !== nums.length - 1) {
        ans++;
        curCover = nextCover;
        if (nextCover >= nums.length - 1) break;
      } else break;
    }
  }
  return ans;
};
// @lc code=end

