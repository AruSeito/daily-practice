/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const res = [], path = [];

  const treeBack = (startIndex) => {
    if (path.length > 1) {
      res.push([...path]);
    }

    const used = new Array(201).fill(0);
    for (let i = startIndex; i < nums.length; i++) {
      if ((path.length && path[path.length - 1] > nums[i]) || used[nums[i] + 100] === 1) {
        continue;
      }
      used[nums[i] + 100] = 1;
      path.push(nums[i]);
      treeBack(i + 1);
      path.pop();
    }
  }
  treeBack(0);
  return res;
};
// @lc code=end

