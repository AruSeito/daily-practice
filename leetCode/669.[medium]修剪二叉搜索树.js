/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (root === null) return root;

  if (root.val < low) {
    const right = trimBST(root.right, low, high);
    return right;
  }

  if (root.val > high) {
    const left = trimBST(root.left, low, high);
    return left;
  }

  if (root.left) root.left = trimBST(root.left, low, high)
  if (root.right) root.right = trimBST(root.right, low, high)
  return root;
};
// @lc code=end

