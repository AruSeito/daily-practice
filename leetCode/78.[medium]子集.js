/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [], path = [];

  const treeBack = (startIndex) => {
    res.push([...path]);
    if (startIndex >= nums.length) return;

    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      treeBack(i + 1);
      path.pop();
    }
  }
  treeBack(0);
  return res;
};
// @lc code=end

