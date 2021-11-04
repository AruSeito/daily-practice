/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [], path = [], used = new Array(21).fill(0);

  const treeBack = () => {
    if (path.length === nums.length) {
      res.push([...path]);
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[nums[i] + 10] === 1) continue;
      path.push(nums[i]);
      used[nums[i] + 10] = 1;
      treeBack();
      used[nums[i] + 10] = 0;
      path.pop();
    }
  }
  treeBack();
  return res;
};
// @lc code=end

