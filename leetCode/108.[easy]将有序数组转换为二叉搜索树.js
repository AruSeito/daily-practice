/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);
  const mid = parseInt(nums.length / 2);
  const leftVals = nums.slice(0, mid);
  const rightVals = nums.slice(mid + 1, nums.length);
  let node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(leftVals);
  node.right = sortedArrayToBST(rightVals);
  return node;
};
// @lc code=end

