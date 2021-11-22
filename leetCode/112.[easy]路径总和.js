/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const getSum = (node, count) => {
  if (node.left === null && node.right === null && count === 0) return true;
  if (node.left === null && node.right === null) return false;
  if (node.left) {
    if (getSum(node.left, count - node.left.val)) return true;
  }
  if (node.right) {
    if (getSum(node.right, count - node.right.val)) return true;
  }
  return false;
}
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  return getSum(root, targetSum - root.val);
};
// @lc code=end

