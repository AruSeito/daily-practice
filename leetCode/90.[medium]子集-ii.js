/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [], path = [], used = {};

  nums.sort((a, b) => a - b);

  const treeBack = (startIndex) => {
    res.push([...path]);
    if (startIndex >= nums.length) return;

    for (let i = startIndex; i < nums.length; i++) {
      if (i > 0 && nums[i - 1] === nums[i] && nums[i - 1] !== true) {
        continue;
      }
      path.push(nums[i]);
      used[nums[i]] = true;
      treeBack(i + 1);
      path.pop();
      used[nums[i]] = false;
    }
  }
  treeBack(0);
  return res;

};
// @lc code=end

