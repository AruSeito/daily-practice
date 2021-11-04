/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [], path = [], used = [];
  nums.sort((a, b) => a - b);

  const treeBack = () => {
    if (path.length === nums.length) {
      res.push(...path);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = 1;
        treeBack();
        path.pop();
        used[i] = 0;
      }
    }
  }
  treeBack();
  return res;
};
// @lc code=end

